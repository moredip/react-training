import React from 'react';

export default function App(){
  const greeting = randomGreeting();  

  return (
    <div>
      <Salutation greeting={greeting}/>
      <ChangeGreetingButton/>
    </div>
  );
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
