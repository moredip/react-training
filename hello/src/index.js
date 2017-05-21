import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const container = document.getElementById('root');

function renderApp(){
  ReactDOM.render( 
    <App/>,
    container 
  );
}

renderApp();
