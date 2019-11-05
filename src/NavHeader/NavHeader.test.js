import React from 'react';
import { shallow } from 'enzyme';
import NavHeader from './NavHeader';

describe('NavHeader', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<NavHeader />);
    expect(wrapper).toMatchSnapshot();
  });

});