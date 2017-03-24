import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const container = document.getElementById('root');

function renderApp(){
  ReactDOM.render( 
    <App greeting="Gutentag" currentTime={new Date()}/>,
    container 
  );
}

renderApp();
setInterval(renderApp,100);
