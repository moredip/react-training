const uuid = require('uuid/v4');


export function createMessage(text){
  const id = uuid();

  return { id, text };
}

export function getMessageText(message){
  return message.text;
}

export function getMessageStarState(message){
  return 'unstarred';
}
