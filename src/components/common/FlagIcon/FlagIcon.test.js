import React from 'react';
import { shallow } from 'enzyme';
import { FlagIconComponent } from './FlagIcon';

describe('Component FlagIcon', () => {
  it('should render without crashing', () => {
    const component = shallow(<FlagIconComponent />);
    expect(component).toBeTruthy();
  });
});
