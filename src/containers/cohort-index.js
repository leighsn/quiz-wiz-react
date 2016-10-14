import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { fetchCohorts } from '../actions/index';
import { formatDate } from '../utils/utils'
import  { browserHistory } from 'react-router'

class CohortIndex extends Component {

  constructor(props){
    super(props)
    this.renderCohorts = this.renderCohorts.bind(this)
  }

  componentWillMount(){
    this.props.fetchCohorts()
  }

  componentDidReceiveProps(){
    this.setState()
  }

  renderCohorts(){
    if (!!this.props.cohorts){
      return this.props.cohorts.map( cohort => {
        return (
          <tr key={cohort.id} onClick={()=>{browserHistory.push(`/cohorts/${cohort.id}`)}}>
            <td className="col-xs-4">{cohort.flatiron_named}</td>
            <td className="col-xs-4">{cohort.student_named}</td>
            <td className="col-xs-4">{formatDate(new Date(cohort.start_date))}</td>
          </tr>
        )
      })
    } else {
      return <div>Loading</div>
    }
  }

  render(){
    return (
      <div>
        <h1>Cohorts </h1>
        <table className="table table-striped table-hover">
          <thead className="thead default">
            <tr>
              <th>Name</th>
              <th>Class Name</th>
              <th>Start Date</th>
            </tr>
          </thead>
          <tbody>
            {this.renderCohorts()}
          </tbody>
        </table>
      </div>
    )
  }

}


function mapStateToProps(state){
  return {
    cohorts: state.cohorts
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCohorts}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CohortIndex);
