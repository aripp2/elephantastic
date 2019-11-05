import { randomPup } from './randomPup';

describe('randomPup', () => {

  it('should return the inital state', () => {
    const expected = null;
    const result = randomPup(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should update state when SET_RANDOM is the type', () => {
    const mockPup = {
      breeds: [{}],
      height: 480,
      id: "B1i67l5VQ",
      url: "https://cdn2.thedogapi.com/images/B1i67l5VQ_1280.jpg",
      width: 640
    };
    const mockAction = {
      type: 'SET_RANDOM',
      pup: mockPup
    };
    const result = randomPup(mockPup, mockAction);
    expect(result).toEqual(mockPup);
  });

});