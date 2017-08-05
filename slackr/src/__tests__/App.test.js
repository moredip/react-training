import React from 'react';
import { shallow } from 'enzyme';

import deepEqualIdent from 'deep-equal-ident';

import App from '../App';

describe('App', function () {
  it('updates history with new messages as they are composed', function () {
    const component = shallow(<App/>);
    const composeMessage = component.find('ComposeMessage');

    // need to "re-find" ChannelHistory each time
    expect(component.find('ChannelHistory')).toHaveProp('messages',[]);

    composeMessage.prop('onMessage')('a new message');

    expect(component.find('ChannelHistory')).toHaveProp('messages',[
      'a new message'
    ]);

    composeMessage.prop('onMessage')('another message');

    expect(component.find('ChannelHistory')).toHaveProp('messages',[
      'a new message',
      'another message',
    ]);
  });
});
