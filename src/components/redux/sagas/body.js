import { put, takeEvery } from 'redux-saga/effects';

import { getBody } from '../actions/index';

export function* getBodyRequest(obj){
    if(obj!==null){
        yield put(getBody.success({body: obj}));
    }else{
        yield put(getBody.failure("error"));
    }
}

export default function* bodySaga(){
    yield takeEvery(getBody.REQUEST, getBodyRequest);
}