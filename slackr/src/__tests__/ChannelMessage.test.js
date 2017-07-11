import React from 'react';
import { shallow } from 'enzyme';

import ChannelMessage from '../ChannelMessage';
import {createMessage,starMessage} from '../message';

describe('ChannelMessage', () => {
  it('shows the message text', () => {
    const message = createMessage('my message');
    const component = shallow(
      <ChannelMessage message={message}/>
    );
    expect(component.find('.channel-history__message-text')).toHaveText('my message');
  });

  it('has correct CSS for unstarred message', () => {
    const message = createMessage('blah');
    const component = shallow(
      <ChannelMessage message={message}/>
    );
    expect(component.find('.channel-history__message-star')).not.toHaveClassName('-starred');
  });

  it('has correct CSS for starred message', () => {
    const starredMessage = starMessage(createMessage('blah'));
    const component = shallow(
      <ChannelMessage message={starredMessage}/>
    );
    expect(component.find('.channel-history__message-star')).toHaveClassName('-starred');
  });

  it('calls handler when star is clicked', () => {
    const message = createMessage('blah');
    const onStarClickedSpy = jest.fn();

    const component = shallow(
      <ChannelMessage 
        message={message}
        onStarClicked={onStarClickedSpy}
      />
    );

    component
      .find('.channel-history__message-star')
      .simulate('click',DUMMY_EVENT);

    expect(onStarClickedSpy).toHaveBeenCalled();
  });
});

const DUMMY_EVENT = {
  preventDefault() {}
};
