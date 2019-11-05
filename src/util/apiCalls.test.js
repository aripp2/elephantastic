import { getRandom, postVote, getBreeds, getFavorites, addFavorite, deleteFavorite, getBreedImages } from './apiCalls';

const xKey = 'fdae1377-8b39-4c2b-a87f-38d9ef268562';
const getOptions = {
    method: 'GET',
    headers: {
      'x-api-key': xKey
    }
  };
const baseUrl = 'https://api.thedogapi.com/v1';

describe('getRandom', () => {
  const mockRandom = [
    {
      breeds: [],
      height: 720,
      id: "anIClTXyD",
      url: "https://cdn2.thedogapi.com/images/anIClTXyD.jpg",
      width: 350
    }];
  const mockResponse = mockRandom[0];
  const url = `${baseUrl}/images/search`;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockRandom)
      })
    });
  });

  it('should call fetch with the correct url and options', () => {
    getRandom();
    expect(window.fetch).toHaveBeenCalledWith(url, getOptions);
  });

  it('should return a random pup object', () => {
    expect(getRandom()).resolves.toEqual(mockResponse);
  });

  it('should throw and error if the reponse is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(getRandom()).rejects.toEqual(Error('There was an issue getting a pup, try again later.'));
  });

  it('should throw an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Server Error'))
    });
    expect(getRandom()).rejects.toEqual(Error('Server Error'));
  });

});

describe('postVote', () => {
  const mockImageID = '12345';
  const mockUpVote = '1';
  const mockDownVote = '0';
  const mockOptions = {
    method: 'POST',
    body: JSON.stringify({
      image_id: mockImageID,
      value: mockUpVote
    }),
    headers: {
      'Content-type': 'application/json',
      'x-api-key': xKey
    }
  }
  const url = `${baseUrl}/votes`;
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true
      })
    });
  });

  it('should call fetch with the correct url and upVote options', () => {
    postVote(mockImageID, mockUpVote);
    expect(window.fetch).toHaveBeenCalledWith(url, mockOptions)
  });

  it('should throw and error if response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(postVote()).rejects.toEqual(Error('Unable to submit your vote.'));
  });

  it('should throw an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Server Error'))
    });
    expect(postVote()).rejects.toEqual(Error('Server Error'));
  });


});

describe('getBreeds', () => {
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
    const url = `${baseUrl}/breeds`;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockBreeds)
      })
    });
  });

  it('should call fetch with the correct url', () => {
    getBreeds();
    expect(window.fetch).toHaveBeenCalledWith(url, getOptions);
  });

  it('should return an array of breeds', () => {
    expect(getBreeds()).resolves.toEqual(mockBreeds);
  });

  it('should throw and error if response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(getBreeds()).rejects.toEqual(Error('Unable to get the breeds.'));
  });

  it('should throw an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Server Error'))
    });
    expect(getBreeds()).rejects.toEqual(Error('Server Error'));
  });

});

describe('getFavorites', () => {
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
  const url = `${baseUrl}/favourites`;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockFavs)
      })
    });
  });

  it('should call fetch with the correct url', () => {
    getFavorites();
    expect(window.fetch).toHaveBeenCalledWith(url, getOptions);
  });

  it('should return an array or favorites', () => {
    expect(getFavorites()).resolves.toEqual(mockFavs);
  });

  it('should throw and error if response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(getFavorites()).rejects.toEqual(Error('Unable to get your favorites right now.'));
  });

  it('should throw an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Server Error'))
    });
    expect(getFavorites()).rejects.toEqual(Error('Server Error'));
  });

});

describe('addFavorite', () => {
  const mockImgID = '12345';
  const mockOptions = {
    method: 'POST',
    body: JSON.stringify({
      image_id: mockImgID
    }),
    headers: {
      'Content-type': 'application/json',
      'x-api-key': xKey
    }
  } 
  const url = `${baseUrl}/favourites`;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true
      })
    });
  });

  it('should call fetch with the correct url', () => {
    addFavorite(mockImgID);
    expect(window.fetch).toHaveBeenCalledWith(url, mockOptions);
  });


  it('should throw and error if response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(addFavorite()).rejects.toEqual(Error('Unable to add favorite.'));
  });

  it('should throw an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Server Error'))
    });
    expect(addFavorite()).rejects.toEqual(Error('Server Error'));
  });

});

describe('deleteFavorite', () => {

  const mockFavId = '12345';
  const mockOptions = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'x-api-key': xKey
    }
  };
  const url = `${baseUrl}/favourites/${mockFavId}`;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true
      })
    });
  });

  it('should call fetch with the correct url', () => {
    deleteFavorite(mockFavId);
    expect(window.fetch).toHaveBeenCalledWith(url, mockOptions);
  });


  it('should throw and error if response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(deleteFavorite()).rejects.toEqual(Error('Unable to remove this favorite.'));
  });

  it('should throw an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Server Error'))
    });
    expect(deleteFavorite()).rejects.toEqual(Error('Server Error'));
  });

});

describe('getBreedImages', () => {

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
  const mockBreedId = 9;
  const limit = '4';
  const order = 'RANDOM';
  const url = `${baseUrl}/images/search?breed_id=${mockBreedId}&limit=${limit}&order=${order}`;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockBreedImages)
      })
    })
  });

  it('should call fetch with the correct url', () => {
    getBreedImages(mockBreedId);
    expect(window.fetch).toHaveBeenCalledWith(url, getOptions);
  });

  it('should return an array of breedImages', () => {
    expect(getBreedImages(mockBreedId)).resolves.toEqual(mockBreedImages);
  });

  it('should throw and error if response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(getBreedImages()).rejects.toEqual(Error('Unable to get the images. Try again later.'));
  });

  it('should throw an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Server Error'))
    });
    expect(getBreedImages()).rejects.toEqual(Error('Server Error'));
  });

});