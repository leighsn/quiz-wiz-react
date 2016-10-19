import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class TableRow extends Component {

  constructor(props){
    super(props)
    this.state = {textDecoration: "none"}
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.handleHover = this.handleHover.bind(this)
  }

  handleMouseOut(){
    this.setState({textDecoration: "none"})
  }

  handleHover(){
    this.setState({textDecoration: "underline"})
  }

  render(){
    return (
      <tr key={this.props.key} onClick={()=>{browserHistory.push(`/${this.props.modelName}s/${this.props.model.id}`)}} onMouseEnter={()=>{this.handleHover()}} onMouseOut={this.handleMouseOut}>
        <td className="col-xs-4" style={{textDecoration: this.state.textDecoration}}>{this.props.row[this.props.column_one]}</td>
        <td className="col-xs-4" style={{textDecoration: this.state.textDecoration}}>{this.props.row[this.props.column_two]}</td>
        <td className="col-xs-4" style={{textDecoration: this.state.textDecoration}}>{this.props.row[this.props.column_three]}</td>
      </tr>
    )
  }
}

export default TableRow
