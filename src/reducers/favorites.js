export const favorites = (state=[], action) => {
  switch (action.type) {
    case 'SET_FAVS':
      return action.favs 
    default:
      return state;
  }
}