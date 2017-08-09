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

  describe('state', () => {
    it('starts off in a normal state', () => {
      const message = msg.createMessage('blah');
      expect(msg.getState(message))
        .toEqual('normal');
    });

    it('can transition to deleting', () => {
      const message = msg.createMessage('blah')
      const deletingMessage = msg.transitionToDeleting(message);
      expect(msg.getState(deletingMessage))
        .toEqual('deleting');
    });
  });
});
