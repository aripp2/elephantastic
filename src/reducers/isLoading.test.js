import { isLoading } from './isLoading';

describe('isLoading', () => {

  it('should return the initial state', () => {
    const expected = true;
    const result = isLoading(undefined, {});
    expect(result).toEqual(expected)
  });

  it('should update state when UPDATE_LOADING is the type', () => {
    const mockLoading = false;
    const mockAction = {
      type: 'UPDATE_LOADING',
      bool: mockLoading
    };
    const result = isLoading(mockLoading, mockAction);
    expect(result).toEqual(mockLoading);
  });

});