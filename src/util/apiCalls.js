const xKey = 'fdae1377-8b39-4c2b-a87f-38d9ef268562';
const getOptions = {
    method: 'GET',
    headers: {
      'x-api-key': xKey
    }
  };
const baseUrl = 'https://api.thedogapi.com/v1';

export const getRandom = async() => {
  const url = `${baseUrl}/images/search`;
  const response = await fetch(url, getOptions)
  if(!response.ok) {
    throw Error('There was an issue getting a pup, try again later.')
  }
  const random = await response.json();
  return random[0]

}

export const postVote = async (imgId, value) => {
  const url = `${baseUrl}/votes`;
  const options = {
    method: 'POST',
    body: JSON.stringify({
      image_id: imgId,
      value: value
    }),
    headers: {
      'Content-type': 'application/json',
      'x-api-key': xKey
    }
  }

  const response = await fetch(url, options);
  if(!response.ok) {
    throw Error('Unable to submit your vote.')  
  }
  const votes = await response.json()
  console.log('postVote in apiCalls', votes)
}

export const getBreeds = async () => {
  const url = `${baseUrl}/breeds`;
  const response = await fetch(url, getOptions);
  if(!response.ok) {
    console.log(response)
  }
  const breeds = await response.json();
  // console.log('getBreeds in apiCalls', breeds)
  return breeds;
}

export const getFavorites = async() => {
  const url = `${baseUrl}/favourites`;
  const response = await fetch(url, getOptions)
  if(!response.ok) {
    console.log(response)
  }
  const favs = await response.json();
  console.log('favs', favs)
  return favs;
}

export const addFavorite = async(imgId) => {
  const url = `${baseUrl}/favourites`;
  const options = {
    method: 'POST',
    body: JSON.stringify({
      image_id: imgId
    }),
    headers: {
      'Content-type': 'application/json',
      'x-api-key': xKey
    }
  } 

  const response = await fetch(url, options)
  if(!response.ok) {
    throw Error('Unable to add favorite.')
  }
}

export const deleteFavorite = async(favId) => {
  const url = `${baseUrl}/favourites/${favId}`
  const options = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'x-api-key': xKey
    }
  }
  const response = await fetch(url, options)
  if(!response.ok) {
    throw Error('Unable to remove this favorite.')
  }
}

export const getBreedImages = async(breedId) => {
  const limit = '4';
  const order = 'RANDOM';
  const url = `${baseUrl}/images/search?breed_id=${breedId}&limit=${limit}&order=${order}`
  const response = await fetch(url, getOptions)
  if(!response.ok) {
    console.log('selected breed response', response)
  }
  const selected = await response.json()
  console.log('selected in api', selected)
  return selected
}





