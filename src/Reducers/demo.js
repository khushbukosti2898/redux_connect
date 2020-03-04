const initialState = { name: 'Khushbu', id: 5 };
export default (state = initialState, action) => {
  switch (action.type) {
    case 'user':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};