import React from 'react';

export default function App(props){
  return (
    <div>
      <p>{props.greeting}, world.</p>
      <p>The time is {props.currentTime}</p>
    </div>
  );
}
