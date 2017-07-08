import randomGreeting from './randomGreeting';

const INITIAL_STATE={
  greeting: randomGreeting()
};

export default function  mainReducer(state=INITIAL_STATE, action){
  switch(action.type){
    case 'CHANGE_GREETING':
      return Object.assign(
        {},
        state,
        { greeting: randomGreeting() },
      );
    default:
      return state;
  }
}
