import React from 'react';
import { shallow } from 'enzyme';
import { MenuBarComponent } from './MenuBar';

describe('Component MenuBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<MenuBarComponent />);
    expect(component).toBeTruthy();
  });
});
