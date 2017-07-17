import React from 'react';

import randomGreeting from './randomGreeting';
import Salutation from './Salutation';
import AddGreetingButton from './AddGreetingButton';
import ClearGreetingsButton from './ClearGreetingsButton';

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
    const greetings = this.state.greetings.map(function (greeting){
      return <Salutation greeting={greeting}/>;
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
