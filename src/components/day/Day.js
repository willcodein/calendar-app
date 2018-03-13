import React, { Component } from 'react';
import Moment from 'moment';
import './day.css';
import { getOverflowDates } from '../../utility.js'

const Day = ({ date, handleDay }) => {
  let days = [];
  let daysHeader = [];
  let underflows = getOverflowDates(date, 'under');
  let overflows = getOverflowDates(date, 'over');
  let daysInMonth = Moment(date).daysInMonth();
  let daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  underflows.map((day, index) => {
    days.push(
      <span
        className="calendar__date  calendar__date--overflow"
        onClick={ () => {
          handleDay(day, -1)
        }}
        key={ "underflow_" + index }> {day} </span>
    )
  })
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(
      <span
        className={ "calendar__date  " + (Number(date.format('D')) === i ? 'active' : 'inactive') }
        onClick={ () => {
          handleDay(i)
        }}
        key={ i } >{i}</span>
    )
  }
  overflows.map((day, index) => {
    days.push(
      <span
        className="calendar__date  calendar__date--overflow"
        onClick={ () => {
          handleDay(day, 1)
        }}
        key={ "overflow_" + index }> {day} </span>
    )
  })
  daysOfWeek.map((day, index) => {
    return daysHeader.push(<span key={ "dayHeader_" + index } className="calendar__date  calendar__date--header">{ day }</span>)
  })
  return (
    <div className="calendar__date-container">
      <div>
        { daysHeader }
      </div>
      <div>
        { days }
      </div>
    </div>
  )
}

export default Day;
