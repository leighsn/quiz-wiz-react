import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCohort } from '../actions/index';
import TableRow from '../components/table-row';


class CohortShow extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.fetchCohort(this.props.params.id)
  }

  renderCohortStudents(){
    return this.props.cohortShow.students.map((student)=>{

    })
  }

  render(){
    return (
      <div>hi
      
      </div>
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
