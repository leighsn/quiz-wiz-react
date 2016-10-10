import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuestionToQuiz } from '../actions/index';
import { bindActionCreators } from 'redux';

class QuestionInput extends Component {

  render() {
    return(
      <div>
        <h3>
          Question {this.props.id + 1}:
          <input ref="questionContentInputField" id={this.props.id} autoFocus={true} placeholder="Enter a Question" onChange={this.props.addQuestionToQuiz} />
        </h3>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.id
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addQuestionToQuiz }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionInput);
