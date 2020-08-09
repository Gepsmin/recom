import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './components/redux/reducers/body'
import body from './components/redux/sagas/body'
import ReactDOM from 'react-dom';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
);

sagaMiddleware.run(body);

render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root'),
);

//ReactDOM.render(<App />, document.getElementById('root'));