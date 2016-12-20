import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import merge from 'lodash/merge'
import * as ActionTypes from '../actions'

const entities = (state = {
  oppties: {},
  recents: {},
  my: {}
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