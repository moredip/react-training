import React from 'react';
import { mount } from 'enzyme';

import App from '../../App';

describe('App', function () {
  it('renders a greeting and a button', function () {
    const app = mount(<App/>);

    expect(app.find('.change-greeting-button')).toBePresent();
    expect(app.find('.salutation')).toBePresent();
  });

  it('contains a salutation', function () {
    const app = mount(<App/>);

    expect(app.find('.salutation')).toIncludeText(', world');
  });
});
