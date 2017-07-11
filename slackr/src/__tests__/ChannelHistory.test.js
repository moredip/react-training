import React from 'react';
import { shallow } from 'enzyme';

import {ChannelHistory} from '../ChannelHistory';
import {createMessage,getMessageId} from '../message';

describe('ChannelHistory', function () {
  it('has a Messages title', function () {
    const component = shallow(<ChannelHistory />);
    expect(component.find('.channel-history__title')).toHaveText('Messages');
  });

  it('shows the message history', function () {
    const messages = [
      createMessage('first message'),
      createMessage('second message')
    ];
    const component = shallow(<ChannelHistory messages={messages}/>);

    const messageElements = component.find('ChannelMessage')
    expect(messageElements.length).toEqual(2);
    expect(messageElements.at(0)).toHaveProp('message',messages[0]);
    expect(messageElements.at(1)).toHaveProp('message',messages[1]);
  });

  it('hides the entire message area when there are no messages', function () {
    const component = shallow(<ChannelHistory messages={null}/>);
    expect(component.find('.channel-history__message-list'))
      .not.toBePresent();
  });

  it("fires a handler when a message's star is clicked", () => {
    const messages = [
      createMessage('first message'),
      createMessage('second message'),
      createMessage('third message')
    ];

    const onMessageStarredSpy = jest.fn();

    const component = shallow(<ChannelHistory onMessageStarred={onMessageStarredSpy} messages={messages}/>);
    const messageElements = component.find('ChannelMessage');

    expect( messageElements.at(1).prop('onStarClicked') ).toBeInstanceOf(Function);
    messageElements.at(1).prop('onStarClicked')();

    expect(onMessageStarredSpy).toHaveBeenCalledWith( getMessageId(messages[1]) );
  });
});
