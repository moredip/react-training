import React from 'react';

export default function App(){
  return (
    <div>
      <Salutation/>
      <ChangeGreetingButton/>
    </div>
  );
}

function Salutation(){
  const greeting = randomGreeting();  
  return (
    <p>{greeting}, world.</p>
  );
}

function ChangeGreetingButton(){
  return (
    <button onClick={handleChangeButtonClick}>Change greeting</button>
  );
}

function handleChangeButtonClick(event){
  console.log('I was clicked!');
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
