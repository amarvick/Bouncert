/* File Name: userReducer.js                                                *
 * Description: Redux reducer for the users                                 */

import UserActionTypes from '../actionTypes/userActionTypes'

export default function reducer(state={
    userData: [],
    userLoggedIn: false,
    loading: false,
    error: null
}, action) {
    switch(action.type) {
        case UserActionTypes.FETCHING_USER: {
            alert('yes')
            return {...state,
                userLoggedIn: true
            }
        }

        // case UserActionTypes.FETCH_USER_SUCCESS: {
        //     return {...state,
        //         loading: false,
        //         userData: action.payload
        //     }
        // }
        
        // case UserActionTypes.FETCH_USER_ERROR: {
        //     return {...state,
        //         loading: false,
        //         error: action.payload
        //     }
        // }

        default: {}
    }
    return state
}
