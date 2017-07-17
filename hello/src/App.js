import React from 'react';

import randomGreeting from './randomGreeting';

export default function App(props){
  const greeting = randomGreeting();
  return (
    <Salutation greeting={greeting}/>
  );
}

function Salutation(props){
  return (
    <p>{props.greeting}, world</p>
  );
}
