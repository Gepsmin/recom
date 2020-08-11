import {createRoutine} from 'redux-saga-routines';
import { REQUEST } from './utils';

export const GET_BODY = "GET_BODY";

export const getBody = createRoutine(GET_BODY);

const ACTION_TYPE = {
    ADD_USER : 'ADD_USER',
    GET_USER : 'GET_USER',
    DELETE_USER : 'DELETE_USER'
};

export const addUserAction = (dispatch, user) => {
    dispatch({ type: REQUEST(ACTION_TYPE.ADD_USER), payload: user});
};

export const getUserAction = (dispatch, email) => {
    dispatch({ type: REQUEST(ACTION_TYPE.GET_USER), payload: email});
};

export const deleteUserAction = (dispatch, email) => new Promise(()=>{
    dispatch({type: REQUEST(ACTION_TYPE.DELETE_USER), payload: email})
});

export default ACTION_TYPE;


