import React from 'react';

export default function ChangeGreetingButton(props){
  return (
    <button className="change-greeting-button" onClick={props.onChangeGreeting}>Change greeting</button>
  );
}

