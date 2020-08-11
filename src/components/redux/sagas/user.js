import { take, call, put } from 'redux-saga/effects';
// actions
import ACTION_TYPE from '../actions/index';
import { REQUEST, SUCCESS, FAILURE } from '../actions/utils';

//services
import addUser from '../services/addUser';

export function* addUserSaga(){
    while(true){
        try{
            const {payload} = yield take(REQUEST(ACTION_TYPE.ADD_USER));

            const userResponse = yield call(
                addUser, payload.user
            );

            yield put({
                type: SUCCESS(ACTION_TYPE.ADD_USER),
                payload: userResponse
            });
        } catch(error){
            yield put({
                type: FAILURE(ACTION_TYPE.ADD_USER),
                payload: error
            })
        }
    }
}