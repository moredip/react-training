import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('App', function () {
  it('starts off with no last message in history', function () {
    const component = shallow(<App/>);
    const channelHistory = component.find('ChannelHistory');
    expect(channelHistory).toHaveProp('messages',[]);
  });

  it('updates history with new last message when one is composed', function () {
    const component = shallow(<App/>);
    const composeMessage = component.find('ComposeMessage');

    composeMessage.prop('onMessage')('a new message');

    const channelHistory = component.find('ChannelHistory');

    expect(channelHistory).toHaveProp('messages',['a new message']);
  });

  xit('overwrites the previous last message');

});
