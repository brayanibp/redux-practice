import { FETCH_BY_USER } from '../types/pubsTypes';

const INITIAL_STATE = {
  pubs: [],
  loadingPubs: true,
  pubsError: null
}

const pubsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BY_USER: 
      return { 
        ...state, 
        pubs: action.payload,
        loadingPubs: false,
        pubsError: null
      }
    default:
      return { ...state };
  }
}

export default pubsReducer;