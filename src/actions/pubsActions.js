import axios from 'axios';
import { 
  UPDATE_PUB, 
  LOADING_PUBS, 
  PUBS_ERROR, 
  LOADING_COMMENTS, 
  COMMENTS_ERROR, 
  UPDATE_COMMENTS 
} from '../types/pubsTypes';
import * as usersTypes from '../types/usersTypes';

const { FETCH_USERS: FETCH_ALL_USERS } = usersTypes;

export const fetchByUser = (key) => async (dispatch, getState) => {
  const { users } = getState().usersReducer;
  const { pubs } = getState().pubsReducer;
  const user_id = users[key].id;
  dispatch({
    type: LOADING_PUBS
  })
  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
    const new_pubs = data.map((pub) => ({
      ...pub,
      comments: [],
      open: false
    }));
    const updatedPubs = [
      ...pubs,
      new_pubs
    ];
    dispatch({
      type: UPDATE_PUB,
      payload: updatedPubs
    })
    const pubs_key = updatedPubs.length - 1;
    const updatedUsers = [...users];
    updatedUsers[key] = {
      ...users[key],
      pubs_key
    }
    dispatch({
      type: FETCH_ALL_USERS,
      payload: updatedUsers
    })
  } catch (err) {
    console.log('Error: '+err.message);
    dispatch({
      type: PUBS_ERROR,
      payload: err.message
    })
  }
}

export const openClose = (pubs_key,comments_key) => async (dispatch, getState) => {
  const { pubs } = getState().pubsReducer;
  const selected = pubs[pubs_key][comments_key];

  const updatedPub = {
    ...selected,
    open: !selected.open
  };

  const updatedPubs = [...pubs];
  updatedPubs[pubs_key] = [
    ...pubs[pubs_key]
  ];

  updatedPubs[pubs_key][comments_key] = updatedPub;

  dispatch({
    type: UPDATE_PUB,
    payload: updatedPubs
  })
}

export const fetchComments = (pub_key, com_key) => async (dispatch, getState) => {
  dispatch({
    type: LOADING_COMMENTS
  });
  const { pubs } = getState().pubsReducer;
  const selected = pubs[pub_key][com_key];
  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${selected.id}`);
    const updatedPub = {
      ...selected,
      comments: data
    }
    const updatedPubs = [...pubs];
    updatedPubs[pub_key] = [
      ...pubs[pub_key]
    ];
    updatedPubs[pub_key][com_key] = updatedPub;
    dispatch({
      type: UPDATE_COMMENTS,
      payload: updatedPubs
    })
  } catch (err) {
    dispatch({
      type: COMMENTS_ERROR,
      payload: err.message
    })
  }
}