import * as msg from '../message';

const POST_MESSAGE = 'slackr/channel/POST_MESSAGE';
const DELETE_MESSAGE = 'slackr/channel/DELETE_MESSAGE';

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
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.map((m)=> transformTargetMessage(m,action.targetMessageId,msg.transitionToDeleting))
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

export function deleteMessage(targetMessageId){
  return {
    type: DELETE_MESSAGE,
    targetMessageId: targetMessageId
  };
}
