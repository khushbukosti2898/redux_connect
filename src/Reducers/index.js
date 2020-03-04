import { combineReducers } from 'redux';
import demo from './demo';
import addition from './addition'
import addpost from './addpost'

const rootReducer = combineReducers({
  demo,
  addition,
  addpost,
});

export default rootReducer;