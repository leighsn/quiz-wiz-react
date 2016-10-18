import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCohort } from '../actions/index'


class CohortShow extends Component {

  componentWillMount(){
    this.props.fetchCohort(this.props.params.id)
  }

  render(){
    return (
      <div>hi</div>
    )
  }
}

function mapStateToProps(state) {
  return{
    cohortShow: state.cohortShow
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchCohort }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CohortShow)
