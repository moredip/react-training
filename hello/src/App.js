import React from 'react';

import randomGreeting from './randomGreeting';

export default function App(props){
  const greeting = randomGreeting();
  return (
    <div>
      <Salutation greeting={greeting}/>
      <button onClick={handleButtonClick}>Add Greeting</button>
    </div>
  );
}

function handleButtonClick(){
  window.alert('button was clicked!');
}

function Salutation(props){
  return (
    <p>{props.greeting}, world</p>
  );
}
