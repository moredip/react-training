import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import channelReducer, * as channelActions from '../channel';
import * as msg from '../../message';

describe('channel duck', () => {
  let store = undefined;

  beforeEach( () => {
    store = createConfiguredStore();
  });
  
  it('starts off with an empty list of messages [using store]', () => {
    expect(store.getState()).toHaveProperty('messages',[]);
  });

  it('accumulates messages [using store]', () => {
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

  describe('message deletion', () => {
    it('triggers a deletion operation in the backend', () => {
      const fakeBackend = {
        deleteMessage: jest.fn()
      };
      fakeBackend.deleteMessage.mockReturnValue(Promise.resolve(true));

      store.dispatch(
        channelActions.deleteMessage('some-message-id',{backendServer:fakeBackend})
      );

      expect(fakeBackend.deleteMessage).toHaveBeenCalled();
    });

    it('updates a message as DELETING when async deletion starts, then removes it entirely once the async operation succeeds', () => {
      const fakeBackend = {
        deleteMessage(){ return Promise.resolve(true); }
      };
      
      // GIVEN
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
      const asyncDispatch = store.dispatch(
        channelActions.deleteMessage(msg.getId(targetMessage),{backendServer:fakeBackend})
      );

      // THEN
      expect(extractMessageStateFromStore(store)).toEqual([
        'normal',
        'deleting',
        'normal'
      ]);

      expect(extractMessageTextFromStore(store)).toEqual([
        'message the first',
        'message the second',
        'message the third'
      ]);

      return asyncDispatch.then(function () {
        expect(extractMessageTextFromStore(store)).toEqual([
        'message the first',
        'message the third'
        ]);
      });
    });
  });
});

function createConfiguredStore(){
  return createStore(
    channelReducer,
    applyMiddleware(thunk)
  );
}

function extractMessageTextFromStore(store){
  return store.getState().messages.map(msg.getText);
}

function extractMessageStateFromStore(store){
  return store.getState().messages.map(msg.getState);
}
