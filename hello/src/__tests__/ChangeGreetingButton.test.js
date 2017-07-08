import React from 'react';
import { shallow } from 'enzyme';

import {ChangeGreetingButton} from '../ChangeGreetingButton';

describe('ChangeGreetingButton', function () {
  it('contains a <button>', function () {
    const component = shallow(<ChangeGreetingButton/>);
    expect(component.find('button')).toBePresent();
  });

  it('triggers handler when button is pressed', function () {
    const spyHandler = jest.fn();
    const component = shallow(<ChangeGreetingButton onChangeGreeting={spyHandler}/>);
    component.find('button').simulate('click');
    expect(spyHandler).toBeCalled();
  });
});
