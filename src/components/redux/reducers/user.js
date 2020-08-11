import ACTION_TYPE from '../actions/index'
import {REQUEST, FAILURE, SUCCESS} from '../actions/utils'

const initialState = {
    id: null,
    email: null,
    name: null,
    password: null,
    isLoading: false,
    errorLoading: false
};

export default function user(state= initialState, action = {}){
    switch(action.type) {
        case REQUEST(ACTION_TYPE.ADD_USER):
        case REQUEST(ACTION_TYPE.DELETE_USER):
        case REQUEST(ACTION_TYPE.GET_USER):
            return {
                ...state,
                id: null,
                email: null,
                name: null,
                password: null,
                isLoading: true,
                errorLoading: false
            };
        case SUCCESS(ACTION_TYPE.ADD_USER):
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                name: action.payload.name,
                password: action.payload.password,
                isLoading: false,
                errorLoading: false
            };
        case SUCCESS(ACTION_TYPE.GET_USER):
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                name: action.payload.name,
                password: action.payload.password,
                isLoading: false,
                erroLoading: false
            }
        case FAILURE(ACTION_TYPE.ADD_USER):
            return {
                ...state,
                id: null,
                email: null,
                name: null,
                password: null,
                isLoading: false,
                errorLoading: true
            };
        case FAILURE(ACTION_TYPE.GET_USER):
            return {
                ...state,
                id: null,
                email: null,
                name: null,
                password: null,
                isLoading: false,
                errorLoading: true
            }
        default:
            return state;
    }
}