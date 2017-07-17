import React from 'react';
import {shallow} from 'enzyme';

import AddGreetingButton from '../AddGreetingButton';

describe('AddGreetingButton', () => {
  it('contains a <button>', () => {
    const component = shallow(<AddGreetingButton/>);
    expect(component.find('button')).toBePresent();
  });

  it('triggers handler when button is clicked', () => {
    let handlerWasClicked = false;
    function handler(){
      handlerWasClicked = true;
    }

    const component = shallow(<AddGreetingButton onAddGreeting={handler}/>);
    component.find('button').simulate('click');
    expect( handlerWasClicked ).toBe(true);
  });
});
