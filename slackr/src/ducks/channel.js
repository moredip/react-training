import * as msg from '../message';

const POST_MESSAGE = 'slackr/channel/POST_MESSAGE';
const STAR_MESSAGE = 'slackr/channel/STAR_MESSAGE';

const INITIAL_STATE = {
  messages: [
    //createMessage('An initial message')
  ]
};

export default function reducer(state = INITIAL_STATE, action){
  switch(action.type) {
    case POST_MESSAGE:
      const newMessage = msg.createMessage(action.text);
      return {
        ...state,
        messages: state.messages.concat([newMessage])
      };
    case STAR_MESSAGE:
      return {
        ...state,
        messages: state.messages.map( 
          (message) => transitionMessageStar(message,action.messageId)
        )
      };
    default: 
      return state;
  }
}

function transitionMessageStar(message,targetId){
  if( msg.getMessageId(message) !== targetId ){
    return message;
  }
  return msg.starMessage(message);
}

export function postMessage(text){
  return {
    type: POST_MESSAGE,
    text: text
  };
}

export function starMessage(messageId){
  return {
    type: STAR_MESSAGE,
    messageId: messageId
  };
}
