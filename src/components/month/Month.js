import React, { Component } from 'react';
import Moment from 'moment';
import PrevMonth from './prevMonth';
import NextMonth from './nextMonth';

const Month = ({ date, handleMonth, monthIncrement }) => {
  const allMonths = Moment.months();
  let months = allMonths.map(( month, index ) => {
    return <option value={ index } key={ month }>{ month }</option>
  })
  const hideNext = date.format('YYYY') === "2020" && date.format('MM') == "12";
  const hidePrev = date.format('YYYY') === "2010" && date.format('MM') == "01";

  return (
    <div>
      { !hidePrev &&
        <PrevMonth monthIncrement={ monthIncrement } />
      }
      <select value={ date.format('M') - 1 }  onChange={ handleMonth }>
        { months }
      </select>
      { !hideNext &&
        <NextMonth monthIncrement={ monthIncrement } />
      }
    </div>
  )
}

export default Month;
