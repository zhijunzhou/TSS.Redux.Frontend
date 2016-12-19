import { CALL_API, Schemas } from '../middleware/api'

const fetchTopOppties = () => ([])

export const loadTop = () => (dispatch, getState) => {
  return dispatch(fetchTopOppties())
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
})
