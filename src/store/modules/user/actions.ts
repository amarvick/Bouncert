import * as types from './constants'
import { actions } from '../'



/**
* Sign Up.
* @param {string} name 
* @param {string} username
* @param {string} dateOfBirth
* @param {string} email
* @param {string} password
* @param {string} passwordVerify
*/

export const signup = (name: string, username: string, dateOfBirth: string, email: string, password: string, passwordVerify: string) => {
    return dispatch => {
        dispatch(actions.app.loading())
        alert('name: ' + name)
        alert('username: ' + username)
        alert('dateOfBirth: ' + dateOfBirth)
        alert('email: ' + email)
        alert('password: ' + password)
        alert('passwordVerify: ' + passwordVerify)

        dispatch(actions.user.login(username, password))
    }
}

/**
* Sign in.
* @param {string} username 
* @param {string} password
*/

export const login = (username: string, password: string) => {
    // async call
    return dispatch => {
        // turn loading animation on
        // by dispacthing `loading` action from module `app`.
        // yes, each action can interact with another module actions.
        dispatch(actions.app.loading())

        // simulate ajax login
        // in real world you can use `fetch` to make ajax request. AM - make this change when BE is complete
        setTimeout(() => {
            if (username === 'admin' && password === 'secret') {
                dispatch({
                    type: types.LOGIN,
                    payload: {
                        userId: username,
                        fullName: 'Clark Kent'
                    }
                })
            }

            // turn loading animation off
            dispatch(actions.app.loading(false))
        }, 3000)
    }
}

/**
* Sign out.
*/
export const logout = () => {
    // direct/sync call
    return {
        type: types.LOGOUT
    }
}
