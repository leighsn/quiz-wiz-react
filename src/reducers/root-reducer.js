import { combineReducers } from 'redux';
import currentUserReducer from './current-user-reducer';
import quizzesReducer from './quizzes-reducer';
import quizShowReducer from './quiz-show-reducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  quizzes: quizzesReducer,
  quizShow: quizShowReducer
})

export default rootReducer;
