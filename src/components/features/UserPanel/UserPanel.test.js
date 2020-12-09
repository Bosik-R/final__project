import React from 'react';
import { shallow } from 'enzyme';
import { UserPanelComponent } from './UserPanel';

describe('Component UserPanel', () => {
  it('should render without crashing', () => {
    const component = shallow(<UserPanelComponent />);
    expect(component).toBeTruthy();
  });
});
