import React, { Component } from 'react';
import Moment from 'moment';
import './calendar.css';

export default class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: this.props.date,
      year: this.props.date.format("YYYY"),
      month: this.props.date.format("MM"),
      day: this.props.date.format("dd"),
      daysInMonth: Moment().daysInMonth(this.props.date)
    }
    console.log(this.props.date.format())
  }
  render() {
    let days = []
    if (Moment([this.state.year, this.state.month, this.state.day])) {
      console.log(this.state.date.startOf('isoWeek').format());
    }
    for (let i = 1; i <= this.state.daysInMonth; i++) {
      days.push(
        <span className="calendar__date" key={i}> {i} </span>
      )
    }
    // console.log(Moment([this.state.date]).month(1).format("YYYY-MM-DD"))
    return (
      <div className="calendar__date-container">
        day = { this.state.day }
        { days }
      </div>
    )
  }
}
