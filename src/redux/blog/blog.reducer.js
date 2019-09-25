import BlogActionTypes from './blog.types';

const INITIAL_STATE = {
  loading: false,
  postData: [],
  error: null,
  filteredData: [],
  reg: false,
  logoState: false
};

const blogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BlogActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case BlogActionTypes.SET_LOGO:
      return {
        ...state,
        logoState: !state.logoState
      };

    case BlogActionTypes.GET_POSTS:
      return {
        ...state,
        postData: action.payload,
        loading: false
      };

    case BlogActionTypes.POSTS_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case BlogActionTypes.FILTER_POSTS:
      return {
        ...state,
        filteredData: action.payload
      };

    case BlogActionTypes.REG_FALSE:
      return {
        ...state,
        reg: false
      };

    case BlogActionTypes.REG_TRUE:
      return {
        ...state,
        reg: true
      };

    default:
      return state;
  }
};

export default blogReducer;
