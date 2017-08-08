import uuid from 'uuid/v4';

export function createMessage(text,uid=uuid()){
  return {
    text:text,
    uid:uid
  };
}

export function getText(message){
  return message.text;
}

export function getId(message){
  return message.uid;
}

