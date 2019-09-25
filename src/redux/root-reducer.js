import { combineReducers } from 'redux';

import blogReducer from './blog/blog.reducer';

export default combineReducers({
  blog: blogReducer
});
