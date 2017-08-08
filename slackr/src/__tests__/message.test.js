import * as msg from '../message';

describe('message', () => {
  it('can be created', () => {
    const message = msg.createMessage('a message');

    expect(msg.getText(message)).toEqual('a message');
    expect(msg.getId(message)).toBeDefined();
  });
  
});
