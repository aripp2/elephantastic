import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { setRandom, throwError, updateLoading, setFavs, setBreeds } from '../../actions';
import { getRandom, getFavorites, addFavorite, deleteFavorite, getBreeds } from '../../util/apiCalls';


jest.mock('../../util/apiCalls.js');

const mockRandomPup = {
  breeds: [],
  height: 720,
  id: "anIClTXyD",
  url: "https://cdn2.thedogapi.com/im/anIClTXyD.jpg",
  width: 350
};

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
}];

const mockBreeds = [
  {
    bred_for: "Sled pulling",
    breed_group: "Mixed",
    height: {imperial: "23 - 26", metric: "58 - 66"},
    id: 8,
    life_span: "10 - 13 years",
    name: "Alaskan Husky",
    temperament: "Friendly, Energetic, Loyal, GentleConfident",
    weight: {imperial: "38 - 50", metric: "17 - 23"}
  },
  {
    bred_for: "Hauling heavy freight, Sled pulling",
    breed_group: "Working",
    height: {imperial: "23 - 25", metric: "58 - 64"},
    id: 9,
    life_span: "12 - 15 years",
    name: "Alaskan Malamute",
    temperament: "Friendly, Affectionate, Devoted, LoyalDignified, Playful",
    weight: {imperial: "65 - 100", metric: "29 - 45"}
  }];

describe('App', () => {

  let wrapper;
  const mockSetRandom = jest.fn();
  const mockThrowError = jest.fn();
  const mockUpdateLoading = jest.fn();
  const mockSetFavs = jest.fn();
  const mockSetBreeds = jest.fn();

  getRandom.mockImplementation(() => Promise.resolve(mockRandomPup));
  getFavorites.mockImplementation(() => Promise.resolve(mockFavs));
  getBreeds.mockImplementation(() => Promise.resolve(mockBreeds));
  addFavorite.mockImplementation(() => Promise.resolve());
  deleteFavorite.mockImplementation(() => Promise.resolve());

  beforeEach(() => {
    wrapper = shallow(<App 
      errorMsg={''}
      isLoading={false}
      setRandom={mockSetRandom}
      throwError={mockThrowError}
      updateLoading={mockUpdateLoading}
      setFavs={mockSetFavs}
      setBreeds={mockSetBreeds}
      />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should call updateRandom', () => {
  //   expect(wrapper.instance().updateRandom()).toHaveBeenCalled()
  // });

  it.skip('should call getRandom when updateRandom is called', () => {
    wrapper.instance().updateRandom();
    // updateLoading(true)
    expect(getRandom).toHaveBeenCalled()
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

  it('calls dispatch with a setRandom action', () => {
    const actionToDispatch = setRandom(mockRandomPup);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setRandom(mockRandomPup);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with a throwError action', () => {
    const mockError = 'An Error';
    const actionToDispatch = throwError(mockError);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.throwError(mockError);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with a setFavs action', () => {
    const actionToDispatch = setFavs(mockFavs);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setFavs(mockFavs);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with a updateLoading action', () => {
    const mockLoading = true;
    const actionToDispatch = updateLoading(mockLoading);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.updateLoading(mockLoading);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with a setBreeds action', () => {
    const actionToDispatch = setBreeds(mockBreeds);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setBreeds(mockBreeds);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

});


