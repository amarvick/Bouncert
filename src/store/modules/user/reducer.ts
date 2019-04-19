import { handleActions } from 'redux-actions'
import { LOGIN, LOGOUT } from './constants'

export type UserState = {
  loggedIn: boolean,
  username: string
}

const initialState: UserState = {
  loggedIn: false,
  username: ''
}

export default handleActions(
  {
    [LOGIN]: (state: UserState = initialState, action): UserState => {
      const p = action.payload
      return {
        loggedIn: true,
        username: p.username
      }
    },

    [LOGOUT]: (): UserState => {
      return {
        loggedIn: false,
        username: ''
      }
    }
  },
  initialState
)