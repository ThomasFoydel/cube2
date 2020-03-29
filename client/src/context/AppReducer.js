export default (state, action) => {
  switch (action.type) {
    case 'CHANGE_ROTATION':
      return {
        ...state,
        currentTransform: action.payload
      };
    case 'CHANGE_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload
      };
    default:
      return state;
  }
};
