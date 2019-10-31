export const randomPup = (state=null, action) => {
  switch (action.type) {
    case 'SET_RANDOM':
      return action.pup;
    default:
      return state;
  }
}