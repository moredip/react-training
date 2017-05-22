import React from 'react';
import { shallow } from 'enzyme';

import Salutation from '../Salutation';

describe('Salutation', function () {
  it('contains the correct salutation', function () {
    const component = shallow(<Salutation greeting={'oh hai'}/>);
    expect(component).toHaveText('oh hai, world.');
  });
});
