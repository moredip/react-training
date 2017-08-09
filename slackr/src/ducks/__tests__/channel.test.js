import {createStore} from 'redux';
import channelReducer, * as channelActions from '../channel';

import * as msg from '../../message';

describe('channel duck', () => {
  it('starts off with an empty list of messages [using store]', () => {
    const store = createStore(channelReducer);
    expect(store.getState()).toHaveProperty('messages',[]);
  });

  it('accumulates messages [using store]', () => {
    const store = createStore(channelReducer);

    store.dispatch(
      channelActions.postMessage('my first message')
    );

    expect(extractMessageTextFromStore(store)).toEqual([
      'my first message'
    ]);

    store.dispatch(
      channelActions.postMessage('the next message')
    );

    expect(extractMessageTextFromStore(store)).toEqual([
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

    const targetMessage = store.getState().messages[1];


    // WHEN
    store.dispatch(
      channelActions.deleteMessage(msg.getId(targetMessage))
    );


    // THEN
    expect(extractMessageStateFromStore(store)).toEqual([
      'normal',
      'deleting',
      'normal'
    ]);
  });
});

function extractMessageTextFromStore(store){
  return store.getState().messages.map(msg.getText);
}

function extractMessageStateFromStore(store){
  return store.getState().messages.map(msg.getState);
}
