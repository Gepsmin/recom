import { handleActions } from 'redux-actions';

import { getBody } from '../actions/index';

const INITIAL_STATE = {
    hasLoadedBody : false,
    errorGettingBody : false,
    body : null
}

const body = handleActions({
        [getBody.REQUEST]: state => ({
            ...state,
            hasLoadedBody : false,
            errorGettingBody: false,
            body : null
        }),
        [getBody.SUCCESS]: (state, {payload}) => ({
            ...state,
            hasLoadedBody : true,
            errorGettingBody : false,
            body : payload.body.payload,
        }),
        [getBody.FAILURE]: state => ({
            ...state,
            hasLoadedBody: false,
            errorGettingBody : true,
            body : null
        })
    },INITIAL_STATE
);

export default body;
