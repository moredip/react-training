import React from 'react';

import randomGreeting from './randomGreeting';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      greetings: []
    };

    this.addNewGreeting = this.addNewGreeting.bind(this);
    this.clearAllGreetings = this.clearAllGreetings.bind(this);
  }

  render(){
    const greetings = this.state.greetings.map(function (greeting,ix){
      return <Salutation key={ix} greeting={greeting}/>;
    });

    return (
      <div>
        <AddGreetingButton onAddGreeting={this.addNewGreeting}/>
        <ClearGreetingsButton onClearGreetings={this.clearAllGreetings}/>
        {greetings}
      </div>
    );
  }

  addNewGreeting(){
    const newGreeting = randomGreeting();
    this.setState({
      greetings: this.state.greetings.concat([newGreeting])
    });
  }

  clearAllGreetings(){
    this.setState({
      greetings: []
    });
  }
}

function AddGreetingButton(props){
  return (
    <button onClick={props.onAddGreeting}>Add Greeting</button>
  );
}

function ClearGreetingsButton(props){
  return (
    <button onClick={props.onClearGreetings}>Clear Greetings</button>
  );
}

function Salutation(props){
  return (
    <p>{props.greeting}, world</p>
  );
}
