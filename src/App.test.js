import React from 'react';
import ReactDOM from 'react-dom';
import  App  from './App';
import {shallow} from 'enzyme';

describe('component App', () => {

  it('renders without crashing', () => {
    expect(shallow(<App />)).toBeTruthy();

    //const div = document.createElement('div');
    //ReactDOM.render(<App />, div);
    //ReactDOM.unmountComponentAtNode(div);
  });
});
