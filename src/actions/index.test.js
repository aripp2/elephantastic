import * as actions from '../actions';

describe('actions', () => {

  it('should have a type of SET_RANDOM', () => {
    const pup = {
      breeds: [{}],
      height: 480,
      id: "B1i67l5VQ",
      url: "https://cdn2.thedogapi.com/images/B1i67l5VQ_1280.jpg",
      width: 640
    };
    const expectedAction = {
      type: 'SET_RANDOM',
      pup
    };
    const result = actions.setRandom(pup);
    expect(result).toEqual(expectedAction)
  });

  it('should have a type THROW_ERROR', () => {
    const error = 'This is the error';
    const expectedAction = {
      type: 'THROW_ERROR',
      error
    };
    const result = actions.throwError(error);
    expect(result).toEqual(expectedAction)
  });

  it('should have a type UPDATE_LOADING', () => {
    const bool = true;
    const expectedAction = {
      type: 'UPDATE_LOADING',
      bool
    };
    const result = actions.updateLoading(bool);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type SET_FAVS', () => {
    const favs = [
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
    const expectedAction = {
      type: 'SET_FAVS',
      favs
    };
    const result = actions.setFavs(favs);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type SET_BREEDS', () => {
    const breeds = [
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
    const expectedAction = {
      type: 'SET_BREEDS', 
      breeds
    };
    const result = actions.setBreeds(breeds);
    expect(result).toEqual(expectedAction);
  });

});