import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  const wrapper = shallow(<App />)

  it('should render header', () => {
    const buttonElement  = wrapper.find('h1');
    expect(buttonElement).toHaveLength(1);
    expect(buttonElement.text()).toEqual('Currency Exchange');
  });
});