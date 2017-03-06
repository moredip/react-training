import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('root');

function renderApp(){
  console.log('rendering');

  const appProps = {
    currentTime: new Date().toString(),
    greeting: "hola"
  };

  ReactDOM.render( App(appProps), container );
}

function App(props){
  return (
    <div>
      <p>{props.greeting}, world.</p>
      <p>The time is {props.currentTime}</p>
    </div>
  );
}

renderApp();

setInterval(renderApp,100);
