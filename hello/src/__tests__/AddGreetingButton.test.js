import React from 'react';
import {shallow} from 'enzyme';

import AddGreetingButton from '../AddGreetingButton';

describe('AddGreetingButton', () => {
  it('contains a <button>', () => {
    const component = shallow(<AddGreetingButton/>);
    expect(component.find('button')).toBePresent();
  });

  it('triggers handler when button is clicked', () => {
    const spyHandler = jest.fn();

    const component = shallow(<AddGreetingButton onAddGreeting={spyHandler}/>);
    component.find('button').simulate('click');
    expect( spyHandler ).toHaveBeenCalled();
  });
});
