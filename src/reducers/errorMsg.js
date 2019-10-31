export const errorMsg = (state='', action) => {
  switch (action.type) {
    case 'THROW_ERROR':
      return action.error
    default:
      return state;
  }
} 