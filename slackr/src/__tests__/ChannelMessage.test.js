import React from 'react';
import { shallow } from 'enzyme';

import ChannelMessage from '../ChannelMessage.js';
import createMessage from '../message.js';

describe('ChannelMessage', () => {
  it('shows the message text', () => {
    const message = createMessage('my message');
    const component = shallow(
      <ChannelMessage message={message}/>
    );
    expect(component.find('.channel-history__message-text')).toHaveText('my message');
  });
});
