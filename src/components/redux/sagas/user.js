import { take, call, put } from 'redux-saga/effects';
// actions
import ACTION_TYPE from '../actions/index';
import { REQUEST, SUCCESS, FAILURE } from '../actions/utils';

//services
import addUser from '../services/addUser';
import getUser from '../services/getUser';



export function* addUserSaga(){
    while(true){
        try{
            const {payload} = yield take(REQUEST(ACTION_TYPE.ADD_USER));
            console.log("saga payload: ");
            console.log(payload);

            const userResponse = yield call(
                addUser, payload
            );

            console.log(userResponse);

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