import React from 'react';
import { shallow } from 'enzyme';

import deepEqualIdent from 'deep-equal-ident';

import App from '../App';

describe('App', function () {
  it('starts off with no last message in history', function () {
    const component = shallow(<App/>);
    const channelHistory = component.find('ChannelHistory');
    expect(channelHistory).toHaveProp('messages',[]);
  });

  it('updates history with new messages as they are composed', function () {
    const component = shallow(<App/>);
    const composeMessage = component.find('ComposeMessage');

    expect(component.state('messages')).toEqual([]);

    composeMessage.prop('onMessage')('a new message');

    expect(component.state('messages')).toEqual([
      'a new message'
    ]);

    composeMessage.prop('onMessage')('another message');

    expect(component.state('messages')).toEqual([
      'a new message',
      'another message'
    ]);

    const channelHistory = component.find('ChannelHistory');

    expect(channelHistory.prop('messages')).toEqual([
      'a new message',
      'another message',
    ]);
  });
});
