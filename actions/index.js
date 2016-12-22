import { CALL_API, Schemas } from '../middleware/api'

export const OPP_REQUEST = 'OPP_REQUEST'
export const OPP_SUCCESS = 'OPP_SUCCESS'
export const OPP_FAILURE = 'OPP_FAILURE'

const fetchTopOppties = () => ({
  [CALL_API]: {
    types: [ OPP_REQUEST, OPP_SUCCESS, OPP_FAILURE ],
    endpoint: `api/documents/my/recent`,
    schema: Schemas.OPP_ARRAY
  }
})

export const loadTop = () => (dispatch, getState) => {
  return dispatch(fetchTopOppties())
}

export const ALL_OPP_REQUEST = 'ALL_OPP_REQUEST'
export const ALL_OPP_SUCCESS = 'ALL_OPP_SUCCESS'
export const ALL_OPP_FAILURE = 'ALL_OPP_FAILURE'

const fetchAllOppties = () => ({
  [CALL_API]: {
    types: [ ALL_OPP_REQUEST, ALL_OPP_SUCCESS, ALL_OPP_FAILURE ],
    endpoint: `api/documents`,
    schema: Schemas.All_OPPTIES_ARRAY
  }
})

export const loadAll =  () => (dispatch, getState) => {
  return dispatch(fetchAllOppties())
}

export const DOC_REQUEST = 'DOC_REQUEST'
export const DOC_SUCCESS = 'DOC_SUCCESS'
export const DOC_FAILURE = 'DOC_FAILURE'

const fetchDocument = (opptyId) => ({
  opptyId,
  [CALL_API]: {
    types: [ DOC_REQUEST, DOC_SUCCESS, DOC_FAILURE ],
    endpoint: `api/documents/${opptyId}`,
    schema: Schemas.DOC
  }
})

export const loadDocument = (opptyId) => (dispatch, getState) => {
  return dispatch(fetchDocument(opptyId))
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
})
