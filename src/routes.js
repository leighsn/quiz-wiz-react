import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import QuizIndex from './containers/quiz-index';
import NewQuizForm from './components/new-quiz-form';
import QuizShow from './containers/quiz-show';
import CohortIndex from './containers/cohort-index';
import CohortShow from './containers/cohort-show';
import SignupForm from './containers/signup-form';
import LoginForm from './containers/login-form';

export default (
  <Route path="/" component={App}>
    <Route path='signup' component={SignupForm} />
    <Route path='login' component={LoginForm} />
    <Route path="quizzes">
      <IndexRoute component={QuizIndex} />
      <Route path="new">
        <IndexRoute component={NewQuizForm} />
      </Route>
      <Route path=":id" component={QuizShow} />
    </Route>
    <Route path="/cohorts">
      <IndexRoute component={CohortIndex} />
      <Route path=":id" component={CohortShow} />
    </Route>
  </Route>
)
