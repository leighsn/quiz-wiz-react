import axios from 'axios';

const url = 'http://localhost:3000/';

export function fetchQuiz(quizId){
  const request = axios.get(url + `quizzes/${quizId}`)

  return {
    type: 'FETCH_QUIZ',
    payload: request
  }
}

export function fetchQuizzes(){
  const request = axios.get(url + `quizzes`)

  return {
    type: 'FETCH_QUIZZES',
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

export function setQuiz(quizForm){
  return {
    type: 'SET_QUIZ',
    payload: quizForm
  }
}

export function addQuestionToQuiz(question){
  question = question.target
  return {
    type: 'ADD_QUESTION',
    payload: question
  }
}

export function fetchCohorts(){
  const response = axios.get(url + '/cohorts')
  return {
    type: 'FETCH_COHORTS',
    payload: response
  }
}
