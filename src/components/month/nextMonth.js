import React, { Component } from 'react';

const nextMonth = ({ monthIncrement }) => {
  return (
    <div className="month__next" onClick={ () => {
      monthIncrement( 1 )
    } }>Next button</div>
  )
}

export default nextMonth;
