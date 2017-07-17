import React from 'react';

import randomGreeting from './randomGreeting';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      greeting: randomGreeting()
    };
  }

  render(){
    return (
      <div>
        <Salutation greeting={this.state.greeting}/>
        <AddGreetingButton onAddGreeting={this.addNewGreeting}/>
      </div>
    );
  }

  addNewGreeting(){
    console.log('adding a new greeting...');
  }
}

function AddGreetingButton(props){
  return (
    <button onClick={props.onAddGreeting}>Add Greeting</button>
  );
}

function Salutation(props){
  return (
    <p>{props.greeting}, world</p>
  );
}
