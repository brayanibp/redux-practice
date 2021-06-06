import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import pubsReducer from './pubsReducer';

export default combineReducers({
  usersReducer,
  pubsReducer
});