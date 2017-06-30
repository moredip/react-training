import {createStore} from 'redux';
import channelReducer, * as channelActions from '../channel';

describe('channel duck', () => {
  it('starts off with an empty list of messages', () => {
    const store = createStore(channelReducer);
    expect(store.getState()).toHaveProperty('messages',[]);
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
});
