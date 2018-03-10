import React, { Component } from 'react';
import Moment from 'moment';

export default class Year extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.years = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  }
  handleChange(e) {
    this.props.handlerFromParent(e.target.value);
  }
  render(){
    let years = this.years.map(year => {
      return <option key={year}>{ year }</option>
    })
    return(
      <div>
        <select value={ this.props.date.format('YYYY') }  onChange={ this.handleChange }>
          { years }
        </select>
      </div>
    )
  }
}
