// export const getRandomElephant = async () => {
//   const response = await fetch('https://elephant-api.herokuapp.com/elephants/random')
//   if(!response.ok) {
//     console.log(response)
//   }
//   const random = await response.json();
//   console.log(random)
//   return random;
// }

export const getRandom = async() => {
  const options = {
    method: 'GET',
    headers: {
      'x-api-key': 'fdae1377-8b39-4c2b-a87f-38d9ef268562'
    }
  }

  const response = await fetch(' https://api.thedogapi.com/v1/images/search', options)
  if(!response.ok) {
    console.log(response)
  }
  const random = await response.json();
  // console.log(random)
  return random[0]

}