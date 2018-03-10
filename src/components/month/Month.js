import React, { Component } from 'react';
import Moment from 'moment';

export default class Month extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: this.props.month,
      months: Moment.months()
    }
  }
  handleChange(e) {
    // this.props.handlerFromParent(e.target.value);
  }
  render(){
    let months = this.state.months.map((month) => {
      return <option key={ month }>{month}</option>
    })
    return (
      <div>
        <select value={ this.state.month }  onChange={ this.handleChange }>
          { months }
        </select>
      </div>
    )
  }
}
