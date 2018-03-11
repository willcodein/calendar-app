import React, { Component } from 'react';
import Moment from 'moment';
import './calendar.css';
import { getOverflowDates } from './utility.js'

const Day = ({ date }) => {
  let days = [];
  let underflows = getOverflowDates(date, 'under');
  let overflows = getOverflowDates(date, 'over');
  let daysInMonth = Moment().daysInMonth();

  underflows.map((day, index) => {
    days.push(
      <span className="calendar__date  calendar__date--overflow" key={index * 2.2}> {day} </span>
    )
  })
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(
      <span className={"calendar__date  " + (date.format('D') == i ? 'active' : null)} key={i}>{i}</span>
    )
  }
  overflows.map((day, index) => {
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

export default Day;
