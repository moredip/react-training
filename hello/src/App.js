import React from 'react';

import Salutation from './Salutation';
import ChangeGreetingButton from './ChangeGreetingButton';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      greeting: randomGreeting()
    };

    this.changeGreeting = this.changeGreeting.bind(this);
  }

  render(){
    return (
      <div>
        <Salutation greeting={this.state.greeting}/>
        <ChangeGreetingButton onChangeGreeting={this.changeGreeting}/>
      </div>
    );
  }

  changeGreeting(){
    this.setState({
      greeting: randomGreeting()
    });
  }
}

const GREETINGS = [
  'Hello',
  'Hola',
  'Hi',
  'Greetz',
  'Gutentag'
];

function randomGreeting(){
  return GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
}
