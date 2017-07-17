import React from 'react';

export default function AddGreetingButton(props){
  return (
    <button onClick={props.onAddGreeting}>Add Greeting</button>
  );
}
