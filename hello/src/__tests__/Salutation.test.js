import React from 'react';
import {shallow} from 'enzyme';

import Salutation from '../Salutation';

describe('Salutation', () => {
  it('contains a correctly formatted salutation', () => {
    const component = shallow(<Salutation greeting="bonjour"/>);
    expect(component).toHaveText('bonjour, world');
  });

  it('defaults to a Hello, world salutation', () => {
    const component = shallow(<Salutation/>);
    expect(component).toHaveText('Hello, world');
  });
});
