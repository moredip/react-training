import React from 'react';

export default function ClearGreetingsButton(props){
  return (
    <button onClick={props.onClearGreetings}>Clear Greetings</button>
  );
}
