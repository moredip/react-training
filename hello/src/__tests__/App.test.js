import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('App', function () {
  it('can be created', function () {
    const component = shallow(<App/>);
    expect(component).toBePresent();
  });

  it('contains a Salutation', function () {
    const component = shallow(<App/>);
    expect(component.find('Salutation')).toBePresent();
  });

  it('contains a ChangeGreetingButton', function () {
    const component = shallow(<App/>);
    expect(component.find('ChangeGreetingButton')).toBePresent();
  });

  it('starts off with an initial greeting', function () {
    const component = shallow(<App nextGreeting={createFakeNextGreetingFunction()} />);
    expect(component.find('Salutation')).toHaveProp('greeting', 'Greeting #1');
  });

  it('picks a new greeting when the button is clicked', function () {
    const component = shallow(<App nextGreeting={createFakeNextGreetingFunction()} />);
    
    component.find('ChangeGreetingButton').prop('onChangeGreeting')();
    expect(component.find('Salutation')).toHaveProp('greeting', 'Greeting #2');
  });

  function createFakeNextGreetingFunction(){
    let counter = 1;
    return function nextGreeting(){
      return `Greeting #${counter++}`;
    };
  }
});
