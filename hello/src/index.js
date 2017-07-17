import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('root');

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

function renderApp(){
  const greeting = randomGreeting();
  ReactDOM.render(
    <p>{greeting}, world</p>,
    container
  );
}

renderApp();
