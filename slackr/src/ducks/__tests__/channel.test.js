import {createStore} from 'redux';
import channelReducer, * as channelActions from '../channel';

describe('channel duck', () => {
  it('starts off with an empty list of messages', () => {
    const initialState = channelReducer();
    expect(initialState).toHaveProperty('messages',[]);
  });

  it('accumulates messages', () => {
    const stateAfterFirstMessage = channelReducer(
      undefined,
      channelActions.postMessage('my first message')
    );

    const stateAfterSecondMessage = channelReducer(
      stateAfterFirstMessage,
      channelActions.postMessage('another message')
    );

    expect(stateAfterFirstMessage).toHaveProperty('messages',[
      'my first message'
    ]);
    expect(stateAfterSecondMessage).toHaveProperty('messages',[
      'my first message',
      'another message'
    ]);
  });























  it('starts off with an empty list of messages [using store]', () => {
    const store = createStore(channelReducer);
    expect(store.getState()).toHaveProperty('messages',[]);
  });

  it('accumulates messages [using store]', () => {
    const store = createStore(channelReducer);

    store.dispatch(
      channelActions.postMessage('my first message')
    );

    expect(store.getState()).toHaveProperty('messages',[
      'my first message'
    ]);

    store.dispatch(
      channelActions.postMessage('the next message')
    );

    expect(store.getState()).toHaveProperty('messages',[
      'my first message',
      'the next message'
    ]);
  });

  it('deletes a message at a specified index', () => {
    // GIVEN
    const store = createStore(channelReducer);
    store.dispatch(
      channelActions.postMessage('message the first')
    );
    store.dispatch(
      channelActions.postMessage('message the second')
    );
    store.dispatch(
      channelActions.postMessage('message the third')
    );


    // WHEN
    store.dispatch(
      channelActions.deleteMessageAtIndex(1)
    );


    // THEN
    expect(store.getState()).toHaveProperty('messages',[
      'message the first',
      'message the third'
    ]);
  });
});
