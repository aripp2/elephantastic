import React from 'react';
import { shallow } from 'enzyme';
import { Vote, mapStateToProps } from './Vote';
import { postVote } from '../../util/apiCalls';

jest.mock('../../util/apiCalls.js');

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

  const mockRandomPup = {
    breeds: [],
    height: 720,
    id: "anIClTXyD",
    url: "https://cdn2.thedogapi.com/images/anIClTXyD.jpg",
    width: 350
  };

describe('Vote', () => {
  let wrapper;
  const mockUpdateRandom = jest.fn();
  const mockUpdateFavs = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Vote 
      randomPup={mockRandomPup}
      favorites={mockFavs}
      updateRandom={mockUpdateRandom}
      updateFavs={mockUpdateFavs}
      />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call postVote with value of 1 and updateRandom when vote-btn is clicked', () => {
    wrapper.find('.vote-btn').at(0).simulate('click');
    expect(postVote).toHaveBeenCalledWith("anIClTXyD", 1);

    expect(mockUpdateRandom).toHaveBeenCalled();
  });

  it('should call postVote with value of 0 and updateRandom when vote-btn is clicked', () => {
    wrapper.find('.vote-btn').at(1).simulate('click');
    expect(postVote).toHaveBeenCalledWith('anIClTXyD', 0);

    expect(mockUpdateRandom).toHaveBeenCalled();
  });

  it('should call updateFavs when fav-but is clicked', () => {
    wrapper.find('.fav-btn').simulate('click');
    expect(mockUpdateFavs).toHaveBeenCalled();
  }); 

});

describe('mapStateToProps', () => {

  it('should return an object of favs array and randomPup obj', () => {
    const mockState = {
      favorites: mockFavs,
      randomPup: mockRandomPup,
      errorMsg: '',
      isLoading: false,
      breeds: []
    };
    const expected = {
      favorites: mockFavs,
      randomPup: mockRandomPup
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
