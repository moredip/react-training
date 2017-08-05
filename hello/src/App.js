import React from 'react';

import randomGreeting from './randomGreeting';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      greetings: []
    };

    this.addNewGreeting = this.addNewGreeting.bind(this);
  }

  render(){
    const greetings = this.state.greetings.map(function (greeting,ix){
      return <Salutation key={ix} greeting={greeting}/>;
    });

    return (
      <div>
        <AddGreetingButton onAddGreeting={this.addNewGreeting}/>
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
