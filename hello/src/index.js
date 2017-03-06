import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('root');

function renderApp(){
  console.log('rendering');

  ReactDOM.render( 
    <App greeting="Gutentag" currentTime={new Date().toString()}/>,
    container 
  );
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
