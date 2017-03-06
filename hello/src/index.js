import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const container = document.getElementById('root');

function renderApp(){
  console.log('rendering');

  ReactDOM.render( 
    <App greeting="Gutentag" currentTime={new Date().toString()}/>,
    container 
  );
}

renderApp();
setInterval(renderApp,100);
