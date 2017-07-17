import React from 'react';
import ReactDOM from 'react-dom';

import randomGreeting from './randomGreeting';

const container = document.getElementById('root');

function renderApp(){
  const greeting = randomGreeting();
  ReactDOM.render(
    <Salutation greeting={greeting}/>,
    container
  );
}

renderApp();

function Salutation(props){
  return (
    <p>{props.greeting}, world</p>
  );
}
