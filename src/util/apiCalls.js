// export const getRandomElephant = async () => {
//   const response = await fetch('https://elephant-api.herokuapp.com/elephants/random')
//   if(!response.ok) {
//     console.log(response)
//   }
//   const random = await response.json();
//   console.log(random)
//   return random;
// }
const xKey = 'fdae1377-8b39-4c2b-a87f-38d9ef268562';
const getOptions = {
    method: 'GET',
    headers: {
      'x-api-key': xKey
    }
  };

export const getRandom = async() => {
  const url = 'https://api.thedogapi.com/v1/images/search';
  const response = await fetch(url, getOptions)
  if(!response.ok) {
    console.log(response)
  }
  const random = await response.json();
  // console.log(random)
  return random[0]

}

export const postVote = async (imgId, value) => {
  const url = 'https://api.thedogapi.com/v1/votes';
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
    console.log(response)
  }
  const votes = response.json()
  console.log('postVote in apiCalls', votes)
}

export const getBreeds = async () => {
  const url = 'https://api.thedogapi.com/v1/breeds';
  const response = await fetch(url, getOptions);
  if(!response.ok) {
    console.log(response)
  }
  const breeds = response.json();
  console.log('getBreeds in apiCalls', breeds)
  return breeds;
}

export const getFavorites = async() => {

}






