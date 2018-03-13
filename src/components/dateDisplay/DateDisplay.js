import React, { Component } from 'react';
import './dateDisplay.css';


const DateDisplay = ({ date }) => {
  return(
    <div className="date-display">
      <div className="date-display__year">{ date.format('YYYY') }</div>
      <div className="date-display__day">{ date.format('dddd') },</div>
      <div>{ date.format('MMM') } { date.format('DD') }</div>
    </div>
  )
}

export default DateDisplay;
