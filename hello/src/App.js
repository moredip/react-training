import React from 'react';

import randomGreeting from './randomGreeting';

export default class App extends React.Component {
  render(){
    const greeting = randomGreeting();
    return (
      <div>
        <Salutation greeting={greeting}/>
        <AddGreetingButton/>
      </div>
    );
  }
}

function AddGreetingButton(props){
  return (
    <button onClick={handleButtonClick}>Add Greeting</button>
  );

  function handleButtonClick(){
    window.alert('button was clicked!');
  }
}

function Salutation(props){
  return (
    <p>{props.greeting}, world</p>
  );
}
