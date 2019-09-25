import BlogActionTypes from './blog.types';
import axios from 'axios';

const {
  SET_LOADING,
  SET_LOGO,
  GET_POSTS,
  POSTS_ERROR,
  FILTER_POSTS,
  REG_FALSE,
  REG_TRUE
} = BlogActionTypes;

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

// Set loading to true
export const setLogo = () => {
  return {
    type: SET_LOGO
  };
};

// Get blog posts from url
export const getPosts = () => async dispatch => {
  try {
    dispatch({ type: SET_LOADING });
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: POSTS_ERROR, payload: 'error' });
  }
};

// Filter posts for the my posts component
export const filterPosts = (array, text) => dispatch => {
  const int = parseInt(text, 10);
  const newArray = array.filter(el => el.userId === int);
  dispatch({ type: FILTER_POSTS, payload: newArray });
};

// Check for correct user id
export const regCheck = text => dispatch => {
  const re = new RegExp('^(?:[1-9]|0[1-9]|10)$');

  if (re.test(text)) {
    dispatch({ type: REG_FALSE });
  } else {
    dispatch({ type: REG_TRUE });
  }
};
