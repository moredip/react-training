import React from 'react';
import { mount } from 'enzyme';

import App from '../../App';

describe('App', function () {
  test('initially has an empty channel history', function () {
    const app = mount(<App/>);
    const messagesInChannelHistory = app.find('.channel-history__message');
    expect(messagesInChannelHistory).toBeEmpty();
  });

  test('after sending a message, it appears in the channel history', function () {
    const app = mount(<App/>);

    app.find('.compose-message__input').simulate('change',{ target: {value: 'beep boop I am a robot'} });
    app.find(".compose-message__submit").simulate('submit');

    const messagesInChannelHistory = app.find('.channel-history__message');
    expect(messagesInChannelHistory).not.toBeEmpty();
    expect(messagesInChannelHistory).toHaveText('beep boop I am a robot');
  });
});
