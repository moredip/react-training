const uuid = require('uuid/v4');


export function createMessage(text){
  const id = uuid();
  const starState = 'unstarred';

  return { id, text, starState };
}

export function getMessageId(message){
  return message.id;
}

export function getMessageText(message){
  return message.text;
}

export function getMessageStarState(message){
  return message.starState;
}

export function starMessage(message){
  return Object.assign(
    {},
    message,
    {starState:'starred'}
  );
}
