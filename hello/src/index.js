import React from 'react';
import ReactDOM from 'react-dom';

import randomGreeting from './randomGreeting';

const container = document.getElementById('root');

function renderApp(){
  const greeting = randomGreeting();
  ReactDOM.render(
    <p>{greeting}, world</p>,
    container
  );
}

renderApp();
