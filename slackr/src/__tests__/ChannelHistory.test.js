import React from 'react';
import { shallow } from 'enzyme';

import ChannelHistory from '../ChannelHistory';

describe('ChannelHistory', function () {
  it('has a Messages title', function () {
    const component = shallow(<ChannelHistory />);
    expect(component.find('.channel-history__title')).toHaveText('Messages');
  });

  it('shows the last message', function () {
    const component = shallow(<ChannelHistory lastMessage="the last message" />);
    expect(component.find('.channel-history__message'))
      .toHaveText('the last message');
  });

  it('hides the message area when there is no last message', function () {
    const component = shallow(<ChannelHistory lastMessage={null}/>);
    expect(component.find('.channel-history__message'))
      .not.toBePresent();
  });
});
