import React from 'react';
import { shallow } from 'enzyme';

import {ChannelHistory} from '../ChannelHistory';

describe('ChannelHistory', function () {
  it('has a Messages title', function () {
    const component = shallow(<ChannelHistory />);
    expect(component.find('.channel-history__title')).toHaveText('Messages');
  });

  it('shows the message history', function () {
    const messages = ['first message','second message'];
    const component = shallow(<ChannelHistory messages={messages}/>);

    const messageElements = component.find('ChannelMessage')
    expect(messageElements.length).toEqual(2);
    expect(messageElements.at(0)).toHaveProp('message','first message');
    expect(messageElements.at(1)).toHaveProp('message','second message');
  });

  it('hides the entire message area when there are no messages', function () {
    const component = shallow(<ChannelHistory messages={null}/>);
    expect(component.find('.channel-history__message-list'))
      .not.toBePresent();
  });
});
