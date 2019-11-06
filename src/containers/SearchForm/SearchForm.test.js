import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm, mapStateToProps, mapDispatchToProps } from './SearchForm';
import { throwError, updateLoading } from '../../actions';
import { getBreedImages } from '../../util/apiCalls';

jest.mock('../../util/apiCalls.js');

const mockBreeds = [
  {
    bred_for: "Sled pulling",
    breed_group: "Mixed",
    height: {imperial: "23 - 26", metric: "58 - 66"},
    id: 8,
    life_span: "10 - 13 years",
    name: "Alaskan Husky",
    temperament: "Friendly, Energetic, Loyal, Gentle, Confident",
    weight: {imperial: "38 - 50", metric: "17 - 23"}
  },
  {
    bred_for: "Hauling heavy freight, Sled pulling",
    breed_group: "Working",
    height: {imperial: "23 - 25", metric: "58 - 64"},
    id: 9,
    life_span: "12 - 15 years",
    name: "Alaskan Malamute",
    temperament: "Friendly, Affectionate, Devoted, Loyal, Dignified, Playful",
    weight: {imperial: "65 - 100", metric: "29 - 45"}
  }];
  const mockBreedImages = [
    {
      breeds: [{}],
      height: 2592,
      id: "GhtSdrW29",
      url: "https://cdn2.thedogapi.com/images/GhtSdrW29.jpg",
      width: 3888
    },
    {
      breeds: [{}],
      height: 668,
      id: "zEQtlI8h1",
      url: "https://cdn2.thedogapi.com/images/zEQtlI8h1.jpg",
      width: 960
    }
  ];
  const mockError = '';
  getBreedImages.mockImplementation(() => Promise.resolve(mockBreedImages));

describe('SearchForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchForm 
      breeds={mockBreeds}
      errorMsg={mockError}
      isLoading={false}
      throwError={jest.fn()}
      updateLoading={jest.fn()}
      />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when change happens', () => {
    const mockEvent = { target: { value: 'Alaskan Malamute'}}
    wrapper.instance().changeHandler(mockEvent) 
    expect(wrapper.state('selectedBreed')).toEqual(mockBreeds[1]);
  });

  it('should call getSelectedImages when changeHandler is called', () => {
    wrapper.instance().getSelectedImages = jest.fn();
    const mockEvent = { target: { value: 'Alaskan Malamute'}}
    wrapper.instance().changeHandler(mockEvent);
    expect(wrapper.instance().getSelectedImages).toHaveBeenCalledWith(9)
  });

  it('should call getBreedImages when getSelectedImages is called', () => {
    wrapper.instance().getSelectedImages(9);
    expect(getBreedImages).toHaveBeenCalled();
  });

  // it('should catch an error if response fails', () => {
  //   getBreedImages.mockImplementation(() => Promise.reject({message: 'Fail'}))
  //   expect(throwError()).toHaveBeenCalledWith('Fail')
  // })

});

describe('mapStateToProps', () => {

  it('should return an object of errorMsg and isLoading', () => {
    const mockState = {
      favorites: [],
      randomPup: {},
      errorMsg: '',
      isLoading: false,
      breeds: mockBreeds
    };
    const expected = {
      errorMsg: '',
      isLoading: false,
      breeds: mockBreeds
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {

  const mockDispatch = jest.fn();

  it('calls dispatch with a throwError action', () => {
    const mockError = 'An Error';
    const actionToDispatch = throwError(mockError);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.throwError(mockError);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with a updateLoading action', () => {
    const mockLoading = true;
    const actionToDispatch = updateLoading(mockLoading);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.updateLoading(mockLoading);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

});

