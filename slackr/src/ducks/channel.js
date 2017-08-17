import * as msg from '../message';
import * as _backendServer from '../backendServer';

const POST_MESSAGE = 'slackr/channel/POST_MESSAGE';
const DELETING_MESSAGE = 'slackr/channel/DELETING_MESSAGE';
const DELETED_MESSAGE = 'slackr/channel/DELETED_MESSAGE';

const INITIAL_STATE = {
  messages: []
};

export default function reducer(state = INITIAL_STATE, action = {}){
  switch(action.type) {
    case POST_MESSAGE:
      const newMessage = msg.createMessage(action.text);
      return {
        ...state,
        messages: state.messages.concat([newMessage])
      };
    case DELETING_MESSAGE:
      return {
        ...state,
        messages: state.messages.map((m)=> transformTargetMessage(m,action.targetMessageId,msg.transitionToDeleting))
      };
    case DELETED_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((message) => !msg.hasId(message,action.targetMessageId))
      };
    default:
      return state;
  }
}

function transformTargetMessage(message,targetId,transformer){
  if( msg.hasId(message,targetId) ){
    return transformer(message);
  }else{
    return message;
  }
}

export function postMessage(text){
  return {
    type: POST_MESSAGE,
    text: text
  };
}

export function deleteMessage(targetMessageId,{backendServer=_backendServer}={}){
  return function(dispatch){
    dispatch({
      type: DELETING_MESSAGE,
      targetMessageId
    });
    return backendServer.deleteMessage(targetMessageId)
    .then(function () {
      dispatch({
        type: DELETED_MESSAGE,
        targetMessageId
      });
    });
  };
}

