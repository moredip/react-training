import uuid from 'uuid/v4';

export function createMessage(text,uid=uuid()){
  return {
    text:text,
    uid:uid,
    state: 'normal'
  };
}

export function getText(message){
  return message.text;
}

export function getState(message){
  return message.state;
}

export function getId(message){
  return message.uid;
}

export function hasId(message,id){
  return id === getId(message);
}

export function transitionToDeleting(message){
  return transitionToState(message,'deleting');
}

function transitionToState(message,state){
  return {
    ...message,
    state: state
  };
}
