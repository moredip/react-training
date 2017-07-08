import randomGreeting from './randomGreeting';


export default function createMainReducer({nextGreeting=randomGreeting}={}){
  const INITIAL_STATE={
    greeting: nextGreeting()
  };

  return function mainReducer(state=INITIAL_STATE, action){
    switch(action.type){
      case 'CHANGE_GREETING':
        return Object.assign(
          {},
          state,
          { greeting: nextGreeting() },
        );
      default:
        return state;
    }
  }
}

