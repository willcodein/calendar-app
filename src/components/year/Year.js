import React, { Component } from 'react';
import Moment from 'moment';

export default class Year extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: Moment(this.props.date).format('YYYY')
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.handlerFromParent(e.target.value);
  }
  render(){
    // let years = this.state.years.map(year => {
    //   return <option key={ year }>{ year }</option>
    // })
    return(
      <div>
        <select value={ this.state.year }  onChange={ this.handleChange }>
          <option>{ this.state.year }</option>
          <option>2017</option>
        </select>
      </div>
    )
  }
}
