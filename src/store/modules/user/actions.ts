import { AsyncStorage } from 'react-native';

import * as types from './constants'
import { actions } from '../'

import axios from 'axios'
import setAuthToken from '../../../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

// Need to finish later
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
    axios.post('http://bouncert-be.herokuapp.com/api/users/login', userData)
      .then(res => {
        const { token } = res.data
        AsyncStorage.setItem("jwtToken", token)
        setAuthToken(token)

        const decoded = jwt_decode(token)

        dispatch({
          type: types.LOGIN,
          payload: decoded
        })
      })

      .catch(err => {
        console.log(err)
        dispatch({
            type: types.ERRORS,
            payload: err
        })
      })
      // turn loading animation off
    dispatch(actions.app.loading(false))
  }
}

export const saveData = (user: object, id: string) => {
  return dispatch => {
    dispatch(actions.app.loading())
    axios.post('http://bouncert-be.herokuapp.com/api/users/saveInfo', {...user, id})
      .then(res => {
        alert('updated!')
        console.log(res.data)
      })

      .catch(err => {
        alert('error')
        console.log(err)
        dispatch({
            type: types.ERRORS,
            payload: err
        })
      })
      // turn loading animation off
    dispatch(actions.app.loading(false))
  }
}

// Query users for swiping right/left
export const getUsers = (userProperties: object) => {
  return dispatch => {
    dispatch(actions.app.loading())
    axios.post('http://bouncert-be.herokuapp.com/api/users/getUsers', userProperties)
      .then(res => {
        alert('all users retrieved. ')
        console.log(res.data)
      })

      .catch(err => {
        alert('error in fetching users. See console.')
        console.log(err)
        dispatch({
          type: types.ERRORS,
          payload: err
        })
      })
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
