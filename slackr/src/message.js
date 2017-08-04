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

export function completeStarring(message){
  return changeStarState(message,'starred');
}

export function startStarring(message){
  return changeStarState(message,'starring');
}

export function unstar(message){
  return changeStarState(message,'unstarred');
}


function changeStarState(message,newState){
  return Object.assign(
    {},
    message,
    {starState:newState}
  );
}
