import * as types from './constants'
import { actions } from '../'

export const login = (username: string, password: string) => {
    return dispatch => {
        dispatch(actions.app.loading())

        setTimeout(() => {
            if (username === 'admin' && password === 'secret') {
                dispatch({
                    type: types.LOGIN,
                    payload: {
                        userId: username,
                        fullName: 'Alex Marvick'
                    }
                })
            }
            dispatch(actions.app.loading(false))
        }, 3000)
    }
}

export const logout = () => {
    return {
        type: types.LOGOUT
    }
}