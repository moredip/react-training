import * as msg from '../message';
import * as _backendServer from '../backendServer';

const POST_MESSAGE = 'slackr/channel/POST_MESSAGE';
const STARRING_MESSAGE = 'slackr/channel/STARRING_MESSAGE';
const STARRED_MESSAGE = 'slackr/channel/STARRED_MESSAGE';

const INITIAL_STATE = {
  messages: [
    //createMessage('An initial message')
  ]
};

export default function reducer(state = INITIAL_STATE, action){
  switch(action.type) {
    case POST_MESSAGE:
      return processPostMessage(state,action.text);
    case STARRING_MESSAGE:
      return processStarringMessage(state,action.messageId);
    case STARRED_MESSAGE:
      return processStarredMessage(state,action.messageId);
    default: 
      return state;
  }
}

function processPostMessage(state,messageText){
  const newMessage = msg.createMessage(messageText);
  return {
    ...state,
    messages: state.messages.concat([newMessage])
  };
}

function processStarringMessage(state,messageId){
  function markTargetMessageAsStarring(message){
    return updateMessage(message,messageId,msg.startStarring);
  }

  return {
    ...state,
    messages: state.messages.map(markTargetMessageAsStarring)
  };
}

function processStarredMessage(state,messageId){
  function markTargetMessageAsStarred(message){
    return updateMessage(message,messageId,msg.completeStarring);
  }

  return {
    ...state,
    messages: state.messages.map(markTargetMessageAsStarred)
  };
}

function updateMessage(message,targetMessageId,updater){
  if( msg.getMessageId(message) !== targetMessageId ){
    return message;
  }
  return updater(message);
}

export function postMessage(text){
  return {
    type: POST_MESSAGE,
    text: text
  };
}

export function starMessage(messageId,{backendServer=_backendServer}={}){
  return function(dispatch){
    dispatch({
      type: STARRING_MESSAGE,
      messageId: messageId
    });
    return backendServer.starMessage(messageId)
    .then(function () {
      dispatch({
        type: STARRED_MESSAGE,
        messageId: messageId
      });
    });
  };
}
