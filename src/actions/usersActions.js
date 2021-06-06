import axios from 'axios';
import { FETCH_USERS, LOADING_USERS, USERS_ERROR } from '../types/usersTypes';

export const fetchAll = () => async (dispatch) => {
  dispatch({
    type: LOADING_USERS
  });
  try {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
      type: FETCH_USERS,
      payload: data
    });
  } catch (err) {
    console.log('Error: '+err.message);
    dispatch({
      type: USERS_ERROR,
      payload: err.message
    })
  }
}