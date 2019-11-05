import { favorites } from './favorites';

describe('favorites', () => {

  it('should return the initial state', () => {
    const expected = [];
    const result = favorites(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should update state when SET_FAVS is the type', () => {
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
    const mockAction = {
      type: 'SET_FAVS',
      favs: mockFavs
    };
    const result = favorites(mockFavs, mockAction);
    expect(result).toEqual(mockFavs);
  });

});