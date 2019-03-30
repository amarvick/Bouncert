import UserActionTypes from '../actionTypes/userActionTypes';
import axios from 'axios';

export function loadUserData() {
    return function action(dispatch) {
        alert('eeeee')
        // dispatch({
        //     type: UserActionTypes.FETCHING_USERS
        // })

        // fetch(link + "api/getUserData")  // AM - shoul probably change later
        //     .then(data => data.json())
        //     .then(res => {
        //         dispatch({
        //             type: UserActionTypes.FETCH_USERS_SUCCESS,
        //             payload: res.data
        //         })
        //     }) 
    
        //     // AM - make this in to an error screen?
        //     .catch(function(error) {
        //         dispatch({
        //             type: UserActionTypes.FETCH_USERS_ERROR,
        //             payload: error
        //         })
        //     })
    }
}