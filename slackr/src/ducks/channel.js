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
      const targetId = action.id;
      return {
        ...state,
        messages: state.messages.filter((m)=> !msg.hasId(m,targetId))
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

export function deleteMessage(targetMessage){
  const id = msg.getId(targetMessage);
  return {
    type: DELETE_MESSAGE,
    id: id
  };
}
