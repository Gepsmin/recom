import {handleActions} from 'redux-actions';

import {getBody} from '../actions/index';

const INITIAL_STATE = {
    hasLoadedBody : false,
    errorGettingBody : false,
    list : []
}

const body = handleActions(
    {
        [getBody.REQUEST]: state => ({
            ...state,
            list: [],
            hasLoadedBody: false,
            errorGettingBody: false,
        }),
        [getBody.FAILURE]: state => ({
            ...state,
            errorGettingBody: true,
        }),
        [getBody.SUCCESS]: (state, {payload}) => ({
            ...state,
            hasLoadedBody: true,
            list: payload,
        }),
        INITIAL_STATE,
    }
);

export default body;