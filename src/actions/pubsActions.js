import axios from 'axios';
import usersReducer from '../reducers/usersReducer';
import { FETCH_BY_USER, LOADING_PUBS, PUBS_ERROR } from '../types/pubsTypes';
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
    const updatedPubs = [
      ...pubs,
      data
    ];
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
    dispatch({
      type: FETCH_BY_USER,
      payload: updatedPubs
    })
  } catch (err) {
    console.log('Error: '+err.message);
    dispatch({
      type: PUBS_ERROR,
      payload: err.message
    })
  }
}