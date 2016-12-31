import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import merge from 'lodash/merge'
import * as ActionTypes from '../actions'
import { resolveOppty } from '../utils/utils'

const entities = (state = {
  oppties: {},
  recents: {},
  my: {},
  doc: {}
}, action) => {
  if (action.response && action.response.entities) {
    switch (action.type) {
      case ActionTypes.OPP_SUCCESS:
        let recents = {
          recents: action.response.entities.oppties
        }
        return merge({}, state, recents)
      case ActionTypes.ALL_OPP_SUCCESS:
        let oppties = {
          oppties: action.response.entities.oppties
        }
        return merge({}, state, oppties)
      case ActionTypes.DOC_SUCCESS:
        let docs = {
          doc: resolveOppty(action.response.entities.docs)
        }
        return merge({}, state, docs)
      default:
        return state
    }
  }

  return state
}

const rootReducer = combineReducers({
  entities,
  routing
})

export default rootReducer