import createMessage from '../message';

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
      const newMessage = createMessage(action.text);
      return {
        ...state,
        messages: state.messages.concat([newMessage])
      };
    default: 
      return state;
  }
}

export function postMessage(text){
  return {
    type: POST_MESSAGE,
    text: text
  };
}
