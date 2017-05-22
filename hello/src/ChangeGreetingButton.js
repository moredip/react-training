import React from 'react';

export default function ChangeGreetingButton(props){
  return (
    <button onClick={props.onChangeGreeting}>Change greeting</button>
  );
}

