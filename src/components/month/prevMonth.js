import React, { Component } from 'react';

const prevMonth = ({ monthIncrement }) => {
  return (
    <div className="month__prev" onClick={ () => {
      monthIncrement( -1 )
    } }>Prev button</div>
  )
}

export default prevMonth;
