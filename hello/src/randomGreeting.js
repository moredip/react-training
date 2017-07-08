const GREETINGS = [
  'Hello',
  'Hola',
  'Hi',
  'Greetz',
  'Gutentag'
];

export default function randomGreeting(){
  return GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
}
