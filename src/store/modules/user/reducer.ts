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

    // "_id": {
    //   "$oid": "5cb95af0d9ac368f2851552a"
    // },
    // "name": "Alex Marvick",
    // "email": "amarvick94@gmail.com",
    // "username": "alex",
    // "password": "$2a$10$Ie5aNFp1FoOUhcicTUgECunoYFqv.aMqv2oWZakwOqnBRnVSKOrjK",
    // "date": {
    //     "$date": "2019-04-19T05:21:52.815Z"
    // },
    // "connections": [],
    // "queried_users": [
    // ],
    // "interested_users": [],
    // "uninterested_users": [],
    // "location": "Seattle, WA",
    // "__v": 0}
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