const POST_MESSAGE = 'slackr/channel/POST_MESSAGE';

const INITIAL_STATE = {
  messages: []
};

export default function reducer(state = INITIAL_STATE, action = {}){
  switch(action.type) {
    case POST_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat([action.message])
      };
    default: 
      return state;
  }
}

export function postMessage(message){
  return {
    type: POST_MESSAGE,
    message: message
  };
}
