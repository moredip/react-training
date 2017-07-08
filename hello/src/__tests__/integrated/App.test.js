import React from 'react';
import { mount } from 'enzyme';

import root from '../../root';

describe('integrated app test', function () {
  it('renders a greeting and a button', function () {
    const app = mount(root());

    expect(app.find('.change-greeting-button')).toBePresent();
    expect(app.find('.salutation')).toBePresent();
  });

  it('contains a salutation', function () {
    const app = mount(root());

    expect(app.find('.salutation')).toIncludeText(', world');
  });
});
