import React, { Component } from 'react';
import Moment from 'moment';
import './calendar.css';

export default class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      day: this.props.date.format("D"),
      daysInMonth: Moment().daysInMonth(this.props.date),
      underflows: this.getOverflowDates(this.props.date, 'under'),
      overflows: this.getOverflowDates(this.props.date, 'over')
    }
  }
  getOverflowDates(date, underOver) {
    if (date.format('dddd') === 'Monday') return false;
    let overflow = [];
    switch(underOver) {
      case 'under':
        let yesterday = Moment(date.startOf('month')).subtract(1, 'days');
        while (yesterday.format('dddd') !== 'Monday') {
          overflow.push(yesterday.format('D'));
          yesterday = Moment(yesterday).subtract(1, 'days');
        }
        break;
      case 'over':
        let tomorrow = Moment(date.endOf('month')).add(1, 'days');
        while (tomorrow.format('dddd') !== 'Tuesday') {
          overflow.push(tomorrow.format('D'));
          tomorrow = Moment(tomorrow).add(1, 'days');
        }
        break;
    }
    return overflow;
  }
  render() {
    let days = []
    this.state.underflows.map((day, index) => {
      days.push(
        <span className="calendar__date  calendar__date--overflow" key={index * 2.2}> {day} </span>
      )
    })
    for (let i = 1; i <= this.state.daysInMonth; i++) {
      days.push(
        <span className={"calendar__date  " + (this.state.day == i ? 'active' : null)} key={i}>{i}</span>
      )
    }
    this.state.overflows.map((day, index) => {
      days.push(
        <span className="calendar__date  calendar__date--overflow" key={index + 2.0000001}> {day} </span>
      )
    })
    return (
      <div className="calendar__date-container">
        { days }
      </div>
    )
  }
}
