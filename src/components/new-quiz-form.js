import React, { Component } from 'react'
import { connect } from 'react-redux';
import { postQuiz } from '../actions/index';
import { bindActionCreators } from 'redux';

class NewQuizForm extends Component  {
  constructor(){
    super()
    this.state = {
      quizForm: {title: '', description: '', questions: []}
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(){
    this.setState({quizForm: {title: this.refs.titleInputField.value}}, ()=>{this.props.postQuiz(this.state.quizForm)})
  }
  render(){
    return (
      <div>
        <form onSubmit={(event)=>{
          event.preventDefault()
          this.handleFormSubmit()
        }}>
          <h2>
            {this.state.quizForm.title}
          </h2>
          <input ref="titleInputField" placeholder="Enter a new Quiz Title" />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    quizForm: state.quizForm
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ postQuiz }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuizForm);
