import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './App';
import reducers from './reducers';


const container = document.getElementById('root');

let store = createStore(reducers);

ReactDOM.render( 
  <Provider store={store}>
    <App/>
  </Provider>, 
  container 
);
