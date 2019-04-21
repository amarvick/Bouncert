import { handleActions } from 'redux-actions'
import { LOGIN, LOGOUT } from './constants'

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
        user: p.user
      }
    },

    [LOGOUT]: (): UserState => {
      return {
        loggedIn: false,
        user: {} 
      }
    }
  },
  initialState
)