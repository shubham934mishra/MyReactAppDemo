import * as ActionTypes from './ActionTypes';

export const getLoginData = (loginObj) => dispatch => {
        dispatch(fetchLoginData(loginObj));
    };


export const fetchLoginData = (data) => ({
        type: ActionTypes.LOGIN_SUCCESS,
        data
    });
