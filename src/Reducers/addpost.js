let initialState=[];

const postReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'addpost':
        return state.concat([action.data]);
      case 'deletepost':
        return state.filter((post)=>post.id !== action.id);
      default:
        return state;
    }
  }
  export default postReducer;