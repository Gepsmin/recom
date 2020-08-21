import { handleActions } from 'redux-actions';

import { getBody } from '../actions/index';

const INITIAL_STATE = {
    hasLoadedBody : false,
    errorGettingBody : false,
    avatar : null
}

const body = handleActions({
        [getBody.REQUEST]: state => ({
            ...state,
            hasLoadedBody : false,
            errorGettingBody: false,
            avatar : null
        }),
        [getBody.SUCCESS]: (state, {payload}) => ({
            ...state,
            hasLoadedBody : true,
            errorGettingBody : false,
            avatar : payload.body.payload,
        }),
        [getBody.FAILURE]: state => ({
            ...state,
            hasLoadedBody: false,
            errorGettingBody : true,
            avatar : null
        })
    },INITIAL_STATE
);

export default body;
