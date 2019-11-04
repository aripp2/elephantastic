export const setRandom = pup =>({
  type: 'SET_RANDOM',
  pup
})

export const throwError = error => ({
  type: 'THROW_ERROR',
  error
})

export const updateLoading = bool => ({
  type: 'UPDATE_LOADING',
  bool
})

export const setFavs = favs => ({
  type: 'SET_FAVS',
  favs
})

export const setBreeds = breeds => ({
  type: 'SET_BREEDS',
  breeds
})