import { errorMsg } from './errorMsg';

describe('errorMsg', () => {

  it('should return the inital state', () => {
    const expected = '';
    const result = errorMsg(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should update state when THROW_ERROR is the type', () => {
    const mockError = 'This is an error';
    const mockAction = {
      type: 'THROW_ERROR',
      error: mockError
    };
    const result = errorMsg(mockError, mockAction);
    expect(result).toEqual(mockError)
  });

});