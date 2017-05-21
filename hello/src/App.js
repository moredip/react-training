import React from 'react';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      greeting: randomGreeting()
    };
  }

  render(){
    return (
      <div>
        <Salutation greeting={this.state.greeting}/>
        <ChangeGreetingButton/>
      </div>
    );
  }
}


function Salutation(props){
  return (
    <p>{props.greeting}, world.</p>
  );
}

function ChangeGreetingButton(){
  function handleChangeButtonClick(event){
    console.log('I was clicked!');
  }

  return (
    <button onClick={handleChangeButtonClick}>Change greeting</button>
  );
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
