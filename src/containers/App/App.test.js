import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { setRandom, throwError, updateLoading, setFavs, setBreeds } from '../../actions';
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

describe('mapStateToProps', () => {

  it('should return an object of errorMsg and isLoading', () => {
    const mockState = {
      favorites: [],
      randomPup: {},
      errorMsg: '',
      isLoading: false,
      breeds: []
    };
    const expected = {
      errorMsg: '',
      isLoading: false
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  const mockDispatch = jest.fn();

  it('calls dispatch with setRandom action when updateRandom is called', () => {
    const mockRandomPup = {
      breeds: [],
      height: 720,
      id: "anIClTXyD",
      url: "https://cdn2.thedogapi.com/images/anIClTXyD.jpg",
      width: 350
    }
    const actionToDispatch = setRandom(mockRandomPup);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.updateRandom()
    expect(mockDispatch).toHaveBeenCalledWith(mockRandomPup)
  });

});


// describe('mapDispatchToProps', () => {
//     it('calls dispatch with an addTodo action when handleSubmit is called', () => {
//       // Setup
//       const mockDispatch = jest.fn();
//       const actionToDispatch = addTodo('Learn Redux!', 1);

//       // Execution
//       const mappedProps = mapDispatchToProps(mockDispatch);
//       mappedProps.handleSubmit('Learn Redux!', 1);

//       // Expectaion
//       expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
//     });
//   });
