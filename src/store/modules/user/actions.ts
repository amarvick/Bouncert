import { AsyncStorage } from 'react-native';

import * as types from './constants'
import { actions } from '../'

import axios from 'axios'
import setAuthToken from '../../../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

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
        setAuthToken(token)

        dispatch({
          type: types.LOGIN,
          payload: {
            userId: userData.username,
            fullName: 'Alex Marvick' // AM - no
          }
        })
      })

      .catch(err => {
        console.log(err.response.data)
        dispatch({
            type: types.ERRORS,
            payload: err.response.data
        })
      })
      // turn loading animation off
    dispatch(actions.app.loading(false))
  }
}

export const logout = () => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false)
  // direct/sync call
  return {
    type: types.LOGOUT
  }
}
