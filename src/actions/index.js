import axios from 'axios';

const url = 'http://localhost:8000/';

export function fetchQuiz(quizId){
  const request = axios.get(url + `quizzes/${quizId}`)

  return {
    type: 'FETCH_QUIZ',
    payload: request
  }
}

export function postQuiz(quizForm){
  const response = axios.post(url + `quizzes`, quizForm)

  return{
    type: 'POST_QUIZ',
    payload: response
  }
}
