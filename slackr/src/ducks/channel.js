const POST_MESSAGE = 'slackr/channel/POST_MESSAGE';
const DELETE_MESSAGE = 'slackr/channel/DELETE_MESSAGE';

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
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((_, ix) => ix !== action.index)
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

export function deleteMessageAtIndex(index){
  return {
    type: DELETE_MESSAGE,
    index: index
  };
}
