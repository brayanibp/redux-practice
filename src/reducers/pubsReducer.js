import { 
  UPDATE_PUB, 
  LOADING_PUBS, 
  PUBS_ERROR, 
  UPDATE_COMMENTS, 
  LOADING_COMMENTS, 
  COMMENTS_ERROR 
} from '../types/pubsTypes';

const INITIAL_STATE = {
  pubs: [],
  loadingPubs: true,
  pubsError: null,
  open: false,
  loadingComments: true,
  commentsError: null
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
      return { 
        ...state, 
        loadingPubs: true, 
        pubsError: null 
      }
    
    case PUBS_ERROR:
      return {
        ...state, 
        pubsError: action.payload,
        loadingPubs: false
      }
    case LOADING_COMMENTS:
      return { 
        ...state, 
        loadingComments: true, 
        commentsError: null 
      }
    case UPDATE_COMMENTS: 
      return { 
        ...state, 
        pubs: action.payload,
        loadingComments: false,
        commentsError: null
      }
    case COMMENTS_ERROR:
      return {
        ...state, 
        commentsError: action.payload,
        loadingComments: false
      }
    default:
      return { ...state };
  }
}

export default pubsReducer;