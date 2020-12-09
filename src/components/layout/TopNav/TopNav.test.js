import React from 'react';
import { shallow } from 'enzyme';
import { TopNavComponent } from './TopNav';

describe('Component TopNav', () => {
  it('should render without crashing', () => {
    const component = shallow(<TopNavComponent />);
    expect(component).toBeTruthy();
  });
});
