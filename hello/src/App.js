import React from 'react';

import randomGreeting from './randomGreeting';

export default function App(props){
  const greeting = randomGreeting();
  return (
    <div>
      <Salutation greeting={greeting}/>
      <button>Add Greeting</button>
    </div>
  );
}

function Salutation(props){
  return (
    <p>{props.greeting}, world</p>
  );
}
