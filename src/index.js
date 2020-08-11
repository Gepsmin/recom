import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import body from './components/redux/reducers/body'
import user from './components/redux/reducers/user'
import rootSaga from './components/redux/sagas/rootSaga'
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({body: body, user: user})

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
);

sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root'),
);

//ReactDOM.render(<App />, document.getElementById('root'));