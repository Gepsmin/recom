import { take, call, put } from 'redux-saga/effects';
// actions
import ACTION_TYPE from '../actions/index';
import { REQUEST, SUCCESS, FAILURE } from '../actions/utils';

//services
import addUser from '../services/addUser';
import deleteUser from '../services/deleteUser';

export function* deleteUserSaga(){
    while(true){
        try{
            const {payload} = yield take(REQUEST(ACTION_TYPE.DELETE_USER));

            const userResponse = yield call(
                deleteUser, payload
            );

            yield put({
                type: SUCCESS(ACTION_TYPE.DELETE_USER),
                payload: userResponse.data
            });
        }catch(error){
            yield put({
                type: FAILURE(ACTION_TYPE.DELETE_USER),
                payload: error
            })
        }
    }
}

export function* addUserSaga(){
    while(true){
        try{
            const {payload} = yield take(REQUEST(ACTION_TYPE.ADD_USER));

            const userResponse = yield call(
                addUser, payload
            );

            yield put({
                type: SUCCESS(ACTION_TYPE.ADD_USER),
                payload: userResponse.data
            });
        } catch(error){
            yield put({
                type: FAILURE(ACTION_TYPE.ADD_USER),
                payload: error
            })
        }
    }
}