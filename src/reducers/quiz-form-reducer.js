import {browserHistory} from 'react-router';

export default function(state = null, action){
  switch (action.type) {
    case 'POST_QUIZ':
      browserHistory.push(`/quizzes/${action.payload.data.id}`)
      return action.payload.data
    default:
      return state
  }
}
