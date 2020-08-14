import body from './body'
import { fork } from 'redux-saga/effects'
import { addUserSaga } from './user'
import { deleteUserSaga} from './user'

export default function* rootSaga(){
    yield fork(body)
    yield fork(addUserSaga)
    yield fork(deleteUserSaga)
}