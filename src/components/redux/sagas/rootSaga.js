import body from './body'
import { fork } from 'redux-saga/effects'
import { addUserSaga, getUserSaga } from './user'
import { deleteUserSaga} from './user'

export default function* rootSaga(){
    yield fork(body)
    yield fork(addUserSaga)
    yield fork(deleteUserSaga)
    yield fork(getUserSaga)
}