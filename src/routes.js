import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App'
import QuizIndex from './components/quiz-index'
import NewQuizForm from './components/new-quiz-form'

export default (
  <Route path="/" component={App}>
    <Route path="quizzes">
      <IndexRoute component={QuizIndex} />
      <Route path="new">
        <IndexRoute component={NewQuizForm} />
      </Route>
    </Route>
  </Route>

)
