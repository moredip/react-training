import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('root');

function renderApp(){
  const currentTime = new Date().toString();
  const content = (
    <div>
      <p>hello, world.</p>
      <p>The time is {currentTime}</p>
    </div>
  );

  ReactDOM.render( content, container );
}

renderApp();
