export const breeds = (state=[], action) => {
  switch (action.type) {
    case 'SET_BREEDS':
      return action.breeds
    default:
      return state;
  }
}