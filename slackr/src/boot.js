import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'
import App from './App';

export default function createReduxedApp(){
  const store = createStore(
    reducers,
    enhancers()
  );

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function enhancers(){
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return composeEnhancers(
    applyMiddleware(thunk)
  );
}
