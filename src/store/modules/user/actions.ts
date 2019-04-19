import { AsyncStorage } from 'react-native';

import * as types from './constants'
import { actions } from '../'

import axios from 'axios'
import setAuthToken from '../../../utils/setAuthToken' // AM - may not need
import jwt_decode from 'jwt-decode'

/**
* Sign Up.
* @param {string} name 
* @param {string} username
* @param {string} dateOfBirth
* @param {string} email
* @param {string} password
* @param {string} passwordVerify
*/

export const signup = (name: string, username: string, dateOfBirth: Date = new Date(), email: string, password: string, passwordVerify: string) => {
  const userData = {
    name: name,
    username: username,
    dateOfBirth: dateOfBirth,
    email: email,
    password: password
  }

  if (password !== passwordVerify) return null; // AM - not really null :) 

  return dispatch => {
    dispatch(actions.app.loading())
  }
}

/**
* Sign in.
* @param {string} username 
* @param {string} password
*/

export const login = (username: string, password: string) => {
  const userData = {
    username: username,
    password: password
  }

  return dispatch => {
    dispatch(actions.app.loading())

    // axios.post('http://10.0.2.2:3001/api/users/login', userData)
    axios.post('http://bouncert-be.herokuapp.com/api/users/login', userData)
      .then(res => {
        const { token } = res.data

        AsyncStorage.setItem("jwtToken", token)

        // set Token to Auth header
        setAuthToken(token)

        // Decode token to get user data
        const decoded = jwt_decode(token)

        // Set current user
        dispatch({
          type: types.LOGIN,
          payload: {
            userId: userData.username,
            fullName: 'Alex Marvick'
          }
        })
        // dispatch(setCurrentUser(decoded))
      })

      .catch(err => {
        console.log(err)
        alert(err)
        // dispatch({
        //     type: AuthActionTypes.GET_ERRORS,
        //     payload: err.response.data
        // })
      })

    // simulate ajax login
    // in real world you can use `fetch` to make ajax request. AM - make this change when BE is complete
    // setTimeout(() => {
    //   if (username === 'admin' && password === 'secret') {
    //     dispatch({
    //       type: types.LOGIN,
    //       payload: {
    //         userId: username,
    //         fullName: 'Clark Kent'
    //       }
    //     })
    //   }

      // turn loading animation off
    dispatch(actions.app.loading(false))
    // }, 3000)
  }
}

export const logout = () => {
  // direct/sync call
  return {
    type: types.LOGOUT
  }
}
