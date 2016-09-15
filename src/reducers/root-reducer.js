import { combineReducers } from 'redux';
import currentUserReducer from './current-user-reducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer
})
