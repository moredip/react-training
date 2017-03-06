import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('root');

function renderApp(){
  console.log('rendering');
  const currentTime = new Date().toString();

  ReactDOM.render( App(currentTime, "howdy"), container );
}

function App(currentTime, greeting){
  return (
    <div>
      <p>{greeting}, world.</p>
      <p>The time is {currentTime}</p>
    </div>
  );
}

renderApp();

setInterval(renderApp,100);
