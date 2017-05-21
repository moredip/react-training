import React from 'react';

export default function App(){
  const greeting = randomGreeting();  
  return (
    <div>
      <p>{greeting}, world.</p>
      <button onClick={handleChangeButtonClick}>Change greeting</button>
    </div>
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
