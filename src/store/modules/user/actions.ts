import { AsyncStorage } from 'react-native';

import * as types from './constants'
import { actions } from '../'

import axios from 'axios'
import setAuthToken from '../../../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

import constants from '../../../../assets/constants'

const apiLink = constants.testLocal ? constants.backEndLinkLocal : constants.backEndLink

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
    console.log(apiLink)
    axios.post(apiLink + 'api/users/login', userData)
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

      // AM todo - consider retrieving all data including the getUsers from here as well before displaying log in screen
      .catch(err => {
        dispatch({
            type: types.ERRORS,
            payload: err
        })
        console.log(err)
      })
      // turn loading animation off
    dispatch(actions.app.loading(false))
  }
}

export const saveData = (user: object, id: string) => {
  return dispatch => {
    dispatch(actions.app.loading())
    axios.post(apiLink + 'api/users/saveInfo', {...user, id})
      .then(res => {
        dispatch({
          type: types.UPDATE_STATE,
          payload: user
        })
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
export const getUsers = (user) => {
  return dispatch => {
    dispatch(actions.app.loading())
    const userProperties = {
      interested_users: user.interested_users,
      uninterested_users: user.uninterested_users,
      id: user.id
    }
    axios.post(apiLink + 'api/users/getUsers', userProperties)
      .then(res => {
        var queriedUserIds = []
        // AM - we want to return the following: name, location, interests... Look at bumble app and see what's returned there.
        // for (let i = 0; i < res.data.length; i++) {
        //   queriedUserIds.push(res.data[i]._id)
        // }

        user.queried_users = res.data

        dispatch(saveData(user, user.id))
      })

      .catch(err => {
        alert('error in fetching users. See console.')
        console.log(err)
        dispatch({
          type: types.ERRORS,
          payload: err
        })
      })
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
