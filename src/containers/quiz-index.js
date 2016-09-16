import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class QuizIndex extends Component  {
  render(){
    return (
      <ol>
      {this.props.quizzes.map(function(quiz){
        return <li> <Link to={`/quizzes/${quiz.id}`}>{quiz.title}</Link></li>})}
      </ol>
    )
  }

}

function mapStateToProps(state){
  return {
    quizzes: state.quizzes
  }
}

export default connect(mapStateToProps)(QuizIndex);
