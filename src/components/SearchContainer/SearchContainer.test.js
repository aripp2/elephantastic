import React from 'react';
import { shallow } from 'enzyme';
import SearchContainer from './SearchContainer';

describe('SearchContainer', () => {
  let wrapper;
  const mockBreedImages = [
    {
      breeds: [{}],
      height: 853,
      id: "BbMFS3bU-",
      url: "https://cdn2.thedogapi.com/images/BbMFS3bU-.jpg",
      width: 1280
    },
    {
      breeds: [{}],
      height: 900,
      id: "8ogZCsDcp",
      url: "https://cdn2.thedogapi.com/images/8ogZCsDcp.jpg",
      width: 1200
    }];

  it('should match the snapshot', () => {
    wrapper = shallow(<SearchContainer breedImages={mockBreedImages} />)
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a message if breedImages is empty', () => {
    const mockEmpty = [];
    wrapper = shallow(<SearchContainer breedImages={mockEmpty} />)
    expect(wrapper).toMatchSnapshot();
  });

});