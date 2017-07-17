import React from 'react';
import {shallow} from 'enzyme';

import App from '../App';

describe('App', () => {
  it('starts off with no greetings', () => {
    const component = shallow(<App/>);
    expect(component.find('Salutation')).not.toBePresent();
  });

  it('adds a new greeting when the add greeting button is clicked', () => {
    const component = shallow(<App/>);
    component.find('AddGreetingButton').prop('onAddGreeting')();
    expect(component.find('Salutation')).toBePresent();
    expect(component.find('Salutation').length).toBe(1);
  });

  // TODO: it clears out greetings when clear greetings button is clicked
});
