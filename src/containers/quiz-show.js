import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz } from '../actions/index';
import { bindActionCreators } from 'redux';

class QuizShow extends Component {
  componentWillMount(){
    this.props.fetchQuiz(this.props.params.id)
  }
  render() {
    if (!this.props.quizShow) {
      return <div>Loading...</div>
    }
    return(
      <div>
        <div>{this.props.quizShow.title}</div>
        <div>{this.props.quizShow.description}</div>
        <ol>{this.props.quizShow.questions.map(function(question){
          return (
            <li key={question.id}>
              {question.content}
            </li>
          )}
        )}
        </ol>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    quizShow: state.quizShow
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchQuiz }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizShow)
