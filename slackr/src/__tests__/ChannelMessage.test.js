import React from 'react';
import { shallow } from 'enzyme';

import ChannelMessage from '../ChannelMessage';
import * as msg from '../message';

describe('ChannelMessage', () => {
  it('shows the message text', () => {
    const message = msg.createMessage('some message');
    const component = shallow(<ChannelMessage message={message}/>);
    expect(component.find('.channel-message__text')).toHaveText('some message');
  });

  it('triggers delete handler when delete icon is clicked', () => {
    const spyHandler = jest.fn();
    const message = msg.createMessage('blah');
    const component = shallow(<ChannelMessage onDelete={spyHandler} message={message}/>);

    component.find('.channel-message__delete').simulate('click');

    expect(spyHandler).toHaveBeenCalledWith();
  });
});

