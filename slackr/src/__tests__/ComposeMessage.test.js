import React from 'react';
import { shallow } from 'enzyme';

import {ComposeMessage} from '../ComposeMessage';

describe('ComposeMessage', function () {
  let component;

  beforeEach(function(){
    component = shallow(<ComposeMessage />);
  });

  it('starts off with an empty message', function () {
    expect(textInput()).toHaveValue('');
  });

  it('has a "write a message" placeholder', function () {
    expect(textInput()).toHaveProp('placeholder','write a message');
  });

  it('does not call handler when input changes but has not been submitted', function () {
    const spyHandler = jest.fn();
    component = shallow( <ComposeMessage onMessage={spyHandler} /> );

    simulateInputtingText('some text input');

    expect(textInput()).toHaveValue('some text input');
    expect(spyHandler).not.toHaveBeenCalled();
  });

  it('does calls handler with inputted text when submitted', function () {
    const spyHandler = jest.fn();
    component = shallow( <ComposeMessage onMessage={spyHandler} /> );

    simulateInputtingText('some text input');
    simulateSubmitting();
    expect(spyHandler).toHaveBeenCalledWith('some text input');
  });

  it('resets text input after submitted', function () {
    simulateInputtingText('some text input');
    simulateSubmitting();

    expect(textInput()).toHaveValue('');
  });

  function textInput(){
    return component.find("input[type='text']");
  }

  function simulateInputtingText(text){
    textInput().simulate('change', { target: {value: text} });
  }

  function simulateSubmitting(){
    component.find("form")
      .simulate('submit',DUMMY_EVENT);
  }

  const DUMMY_EVENT = {
    preventDefault() {}
  };
});
