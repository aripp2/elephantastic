import React from 'react';
import { shallow } from 'enzyme';
import { FavoritesContainer, mapStateToProps } from './FavoritesContainer';

const mockFavs = [
    {
      created_at: "2019-11-01T17:26:47.000Z",
      id: 1095,
      image: {id: "ry8KWgqEQ", url: "https://cdn2.thedogapi.com/images/ry8KWgqEQ.jpg"},
      image_id: "ry8KWgqEQ",
      sub_id: null,
      user_id: "6xrk1n"
    },
    {
      created_at: "2019-11-02T18:32:57.000Z",
      id: 1098,
      image: {id: "edNIMgpSw", url: "https://cdn2.thedogapi.com/images/edNIMgpSw.jpg"},
      image_id: "edNIMgpSw",
      sub_id: null,
      user_id: "6xrk1n"
    }
  ];

  describe('FavoritesContainer', () => {

    let wrapper;
    const mockUpdateFavs = jest.fn();

    beforeEach(() => {
      wrapper = shallow(<FavoritesContainer
          favorites={mockFavs} 
          updateFavs={mockUpdateFavs}
        />)
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should call updateFavs when button is clicked', () => {
      wrapper.find('button').at(0).simulate('click');
      expect(mockUpdateFavs).toHaveBeenCalledWith('ry8KWgqEQ', true, 1095);
    });
  });

  describe('mapStateToProps', () => {

  it('should return an object of favs array', () => {
    const mockState = {
      favorites: mockFavs,
      randomPup: {},
      errorMsg: '',
      isLoading: false,
      breeds: []
    };
    const expected = {
      favorites: mockFavs
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});