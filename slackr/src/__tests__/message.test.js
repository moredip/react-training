import * as msg from '../message';

describe('message', () => {
  it('can be created with text and a default id', () => {
    const message = msg.createMessage('a message');

    expect(msg.getText(message)).toEqual('a message');
    expect(msg.getId(message)).toBeDefined();
  });

  it('can be matched by id', () => {
    const message = msg.createMessage('blah');
    const id = msg.getId(message);

    expect(msg.hasId(message,'not-the-right-id')).toEqual(false);
    expect(msg.hasId(message,id)).toEqual(true);
  });
  
});
