import { UPDATE_PUB, LOADING_PUBS, PUBS_ERROR } from '../types/pubsTypes';

const INITIAL_STATE = {
  pubs: [],
  loadingPubs: true,
  pubsError: null,
  open: false
}

const pubsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PUB: 
      return { 
        ...state, 
        pubs: action.payload,
        loadingPubs: false,
        pubsError: null
      }
    case LOADING_PUBS:
      return { ...state, loadingPubs: true, pubsError: null }
    
    case PUBS_ERROR:
      return {
        ...state, 
        pubsError: action.payload,
        loadingPubs: false
      }
    default:
      return { ...state };
  }
}

export default pubsReducer;