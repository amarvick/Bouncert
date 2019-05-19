import { handleActions } from 'redux-actions'
import {
  ERRORS,
  LOGIN,
  LOGOUT,
  UPDATE_STATE
} from './constants'

export type UserState = {
  loggedIn: boolean,
  user: object
}

const initialState: UserState = {
  loggedIn: false,
  user: {}
}

export default handleActions(
  {
    [LOGIN]: (state: UserState = initialState, action): UserState => {
      const p = action.payload
      return {
        loggedIn: true,
        user: p
      }
    },

    [LOGOUT]: (): UserState => {
      return {
        loggedIn: false,
        user: {} 
      }
    },

    [UPDATE_STATE]: (state: UserState, action): UserState => {
      const p = action.payload
      return {
        loggedIn: state.loggedIn, // AM todo - possible to remove?
        user: p
      }
    },

    // Errors to return
    [ERRORS]: (): UserState => {
      return null
    }
  },
  initialState
)