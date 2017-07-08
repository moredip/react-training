import createMainReducer from '../reducers';

const CHANGE_GREETING_ACTION = {type:'CHANGE_GREETING'};

describe('reducers', function () {
  it('starts off with an initial greeting', () => {
    const reducer = createReducerWithFakeNextGreeting();
    const initialState = reducer(undefined,{});
    expect(initialState).toHaveProperty('greeting','Greeting #1');
  });

  it('changes greeting with every CHANGE_GREETING action', () => {
    const reducer = createReducerWithFakeNextGreeting();
    const initialState = reducer(undefined,{});

    const nextState = reducer(initialState,CHANGE_GREETING_ACTION);
    expect(nextState).toHaveProperty('greeting','Greeting #2');

    const nextNextState = reducer(nextState,CHANGE_GREETING_ACTION);
    expect(nextNextState).toHaveProperty('greeting','Greeting #3');
  });
});

function createReducerWithFakeNextGreeting(){
  const fakeNextGreeting = createFakeNextGreetingFunction();
  return createMainReducer({nextGreeting:fakeNextGreeting});
}

function createFakeNextGreetingFunction(){
  let counter = 1;
  return function nextGreeting(){
    return `Greeting #${counter++}`;
  };
}

