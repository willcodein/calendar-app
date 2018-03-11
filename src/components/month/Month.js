import React, { Component } from 'react';
import Moment from 'moment';
import PrevMonth from './prevMonth';
import NextMonth from './nextMonth';

const Month = ({ date, handleMonth, monthIncrement }) => {
  const allMonths = Moment.months();
  let months = allMonths.map(( month, index ) => {
    return <option value={ index } key={ month }>{ month }</option>
  })

  return (
    <div>
      <PrevMonth monthIncrement={ monthIncrement } />
      <select value={ date.format('M') - 1 }  onChange={ handleMonth }>
        { months }
      </select>
      <NextMonth monthIncrement={ monthIncrement } />
    </div>
  )
}

export default Month;
