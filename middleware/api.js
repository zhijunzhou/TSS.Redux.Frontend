import { Schema, arrayOf } from 'normalizr'
import '../config/environments'

// const API_ROOT = 'https://api.github.com/'
const API_ROOT = window.sp.app.config.services.coreService

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = (endpoint, schema) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
  const custom_headers = new Headers({
    'Authorization': 'Basic ' + btoa('i:0#.w|asiapacific\\zhouzh:K8gNpSnj3p')
  })
  const custom_request = new Request(fullUrl, {
    method: 'GET',
    contentType: 'application/json',
    headers: custom_headers
  })

  return fetch(custom_request)
    .then(response =>
      response.json().then(json => {
        if (!response.ok) {
          return Promise.reject(json)
        }
        if(endpoint === 'api/documents/oppties') {
          const key = Math.floor(Date.now() / 100000).toString()
          if(!window.localStorage.getItem(key)) {
            window.localStorage.setItem(key, JSON.stringify(json))
          }
        }
        return json
      })
    )
}

// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where repos and users are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/paularmstrong/normalizr

// GitHub's API may return results with uppercase letters while the query
// doesn't contain any. For example, "someuser" could result in "SomeUser"
// leading to a frozen UI as it wouldn't find "someuser" in the entities.
// That's why we're forcing lower cases down there.

const userSchema = new Schema('users', {
  idAttribute: user => user.login.toLowerCase()
})

const repoSchema = new Schema('repos', {
  idAttribute: repo => repo.fullName.toLowerCase()
})

const opptySchema = new Schema('oppties', {
  idAttribute: oppty => oppty.opptyId.toUpperCase()
})

const docSchema = new Schema('docs', {
  idAttribute: doc => doc.data.opptyId.toUpperCase()
})

repoSchema.define({
  owner: userSchema
})

// Schemas for Github API responses.
export const Schemas = {
  USER: userSchema,
  USER_ARRAY: arrayOf(userSchema),
  REPO: repoSchema,
  REPO_ARRAY: arrayOf(repoSchema),
  OPP: opptySchema,
  DOC: docSchema,
  OPP_ARRAY: arrayOf(opptySchema),
  MY_OPPITIE_ARRAY: arrayOf(opptySchema),
  All_OPPTIES_ARRAY: arrayOf(opptySchema)
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API')

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let {endpoint} = callAPI
  const {schema, types} = callAPI

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
  if (!schema) {
    throw new Error('Specify one of the exported Schemas.')
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [requestType, successType, failureType] = types

  next(actionWith({
    type: requestType
  }))

  const key = Math.floor(Date.now() / 100000).toString()
  if(callAPI.endpoint === 'api/documents/oppties') {
    var _cache = window.localStorage.getItem(key)
    if(_cache) {
      return next(actionWith({
        response: JSON.parse(_cache),
        type: successType
      }))
    }
  }  

  return callApi(endpoint, schema).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}