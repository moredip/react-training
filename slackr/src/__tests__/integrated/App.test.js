import { mount } from 'enzyme';

import boot from '../../boot'

describe('App', function () {
  let app;

  beforeEach( function(){
    app = mount(boot());
  });

  test('initially has an empty channel history', function () {
    expect(messagesInChannelHistory()).toEqual([]);
  });

  test('after sending a message, it appears in the channel history', function () {
    inputIntoComposeMessage('beep boop I am a robot');
    submitComposedMessage();

    const messages = messagesInChannelHistory();
    expect(messages).toEqual(['beep boop I am a robot']);
  });

  test('after sending two messages, the both appear in the channel history', function () {
    inputIntoComposeMessage('this is the first message');
    submitComposedMessage();

    inputIntoComposeMessage('this is the second message');
    submitComposedMessage();

    const messages = messagesInChannelHistory();
    expect(messages).toEqual([
      'this is the first message',
      'this is the second message'
    ]);
  });

  function inputIntoComposeMessage(text){
    app
      .find('.compose-message__input')
      .simulate('change',{ target: {value:text} });
  }

  function submitComposedMessage(){
    app
      .find(".compose-message__submit")
      .simulate('submit');
  }

  function messagesInChannelHistory(){
    return app
      .find('.channel-history__message-list .channel-message__text')
      .map( (message)=> message.text() );
  }
});
