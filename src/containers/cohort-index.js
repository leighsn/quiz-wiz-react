import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { fetchCohorts } from '../actions/index';
import { filterCohorts } from '../actions/index';
import { formatDate } from '../utils/utils'
import  { browserHistory } from 'react-router'
import TableRow from './../components/table-row'

class CohortIndex extends Component {

  constructor(props){
    super(props)
    this.renderCohorts = this.renderCohorts.bind(this)
    this.handleTableClick = this.handleTableClick.bind(this)
    this.state = {filterFlag: false}

  }

  componentWillMount(){
    this.props.fetchCohorts()
  }

  handleTableClick(e){
    this.setState({filterFlag: !this.state.filterFlag})
    this.props.filterCohorts(e.target.id, this.state.filterFlag)
  }

  renderCohorts(){
    if (!!this.props.cohorts){
      return this.props.cohorts.map( cohort => {
        return (
          <TableRow key={cohort.id} model={cohort} modelName="cohort"
            columns={{column_one: cohort.flatiron_named,
                      column_two: cohort.student_named,
                      column_three: formatDate(new Date(cohort.start_date))
                    }} />
        )
      })
    } else {
      return <tr>
              <td>Loading</td>
            </tr>
    }
  }

  render(){
    return (
      <div>
        <h1>Cohorts </h1>
        <table className="table table-striped table-hover table-bordered">
          <thead className="thead inverse">
            <tr>
              <th><span onClick={this.handleTableClick}  id="flatiron_named" className="glyphicon glyphicon-sort" aria-hidden="true"></span> Flatiron Named </th>
              <th><span onClick={this.handleTableClick} id="student_named" className="glyphicon glyphicon-sort" aria-hidden="true"></span> Student Name </th>
              <th><span onClick={this.handleTableClick} id="start_date" className="glyphicon glyphicon-sort" aria-hidden="true"></span> Start Date</th>
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
    cohorts: state.cohorts,
    userCohorts: state.userCohorts
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCohorts, filterCohorts}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CohortIndex);
