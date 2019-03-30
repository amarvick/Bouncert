/* File Name: reducers.js                                                   *
 * Description: Combines all reducers together so they are all in a single  *
 * package                                                                  */

import { combineReducers } from 'redux'

import auth from './authReducer'
import user from './userReducer'

export default combineReducers ({
    auth,
    user
})
