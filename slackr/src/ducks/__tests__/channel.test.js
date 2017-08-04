import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer, * as channelActions from '../channel';
import {getMessageText,getMessageStarState,getMessageId} from '../../message';

describe('channel duck', () => {
  let store = undefined;

  beforeEach( () => {
    store = createConfiguredStore();
  });

  describe('posting messages', () => {
    it('starts off with an empty list of messages', () => {
      expect(store.getState()).toHaveProperty('messages',[]);
    });

    it('accumulates messages', () => {
      store.dispatch(
        channelActions.postMessage('my first message')
      );

      expect(extractMessageTextFromMessages(store.getState().messages)).toEqual([
        'my first message'
      ]);

      store.dispatch(
        channelActions.postMessage('the next message')
      );

      expect(extractMessageTextFromMessages(store.getState().messages)).toEqual([
        'my first message',
        'the next message'
      ]);
    });
  });

  describe('starring messages', () => {
    it('triggers an async starring operation', () => {
      const fakeBackend = {
        starMessage: jest.fn()
      };
      fakeBackend.starMessage.mockReturnValue(Promise.resolve(true));

      store.dispatch(
        channelActions.postMessage('a message')
      );
      const ourMessage = store.getState().messages[0];

      store.dispatch(
        channelActions.starMessage(getMessageId(ourMessage),{backendServer:fakeBackend})
      );

      expect(fakeBackend.starMessage).toHaveBeenCalledWith(getMessageId(ourMessage));
    });

    it('updates a message as STARRING when async starring starts, and STARRED once the operation succeeds', () => {
      const fakeBackend = {
        starMessage(){ return Promise.resolve(true); }
      };

      store.dispatch(
        channelActions.postMessage('a message')
      );
      const ourMessage = store.getState().messages[0];

      const asyncDispatch = store.dispatch(
        channelActions.starMessage(getMessageId(ourMessage),{backendServer:fakeBackend})
      );

      const ourMessageAfterStarringStarts = store.getState().messages[0];
      expect(getMessageStarState(ourMessageAfterStarringStarts)).toBe('starring');

      return asyncDispatch.then(function () {
        const ourMessageAfterStarringSucceeds = store.getState().messages[0];
        expect(getMessageStarState(ourMessageAfterStarringSucceeds)).toBe('starred');
      });
    });

    it('updates a message as UNSTARRED when an async starring operation fails', () => {
      const fakeBackend = {
        starMessage(){ return Promise.reject(); }
      };

      store.dispatch(
        channelActions.postMessage('a message')
      );
      const ourMessage = store.getState().messages[0];

      const asyncDispatch = store.dispatch(
        channelActions.starMessage(getMessageId(ourMessage),{backendServer:fakeBackend})
      );

      return asyncDispatch
        .catch(function(){})
        .then(function () {
        const ourMessageAfterDispatch = store.getState().messages[0];
        expect(getMessageStarState(ourMessageAfterDispatch)).toBe('unstarred');
      });
    });
  });
});

function createConfiguredStore(){
  return createStore(
    reducer,
    applyMiddleware(thunk)
  );
}

function extractMessageTextFromMessages(messages){
  return messages.map(getMessageText);
}
