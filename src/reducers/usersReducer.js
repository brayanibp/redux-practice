import { FETCH_USERS, LOADING_USERS, USERS_ERROR } from '../types/usersTypes';

const INITIAL_STATE = {
  users: [],
  loadingUsers: true,
  usersError: null
}

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { 
        ...state, 
        users: action.payload,
        loadingUsers: false,
        usersError: null
      }
    
    case LOADING_USERS:
      return { ...state, loadingUsers: true, usersError: null }
    
    case USERS_ERROR:
      return {
        ...state, 
        usersError: action.payload,
        loadingUsers: false
      }

    default:
      return { ...state };
  }
}

export default usersReducer;