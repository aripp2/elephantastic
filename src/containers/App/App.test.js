import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { getRandom, getFavorites, addFavorite, deleteFavorite, getBreeds } from '../../util/apiCalls';

jest.mock('../../util/apiCalls.js');

describe('App', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
