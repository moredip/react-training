import React from 'react';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './App';
import reducers from './reducers';


export default function createAppRoot(){
  const store = createStore(
     reducers,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}
