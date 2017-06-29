import channelReducer, * as channelActions from '../channel';

describe('channel duck', () => {
  it('starts off with an empty list of messages', () => {
    const initialState = channelReducer(undefined,{});
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
});
