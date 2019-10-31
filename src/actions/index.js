export const setRandom = pup =>({
  type: 'SET_RANDOM',
  pup
})

export const throwError = error => ({
  type: 'THROW_ERROR',
  error
})