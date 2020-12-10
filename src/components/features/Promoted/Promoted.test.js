import React from 'react';
import { shallow } from 'enzyme';
import { PromotedComponent } from './Promoted';

describe('Component Promoted', () => {
  it('should render without crashing', () => {
    const component = shallow(<PromotedComponent />);
    expect(component).toBeTruthy();
  });
});
