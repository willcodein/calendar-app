import React, { Component } from 'react';

const nextMonth = ({ monthIncrement }) => {
  return (
    <div className="month__next" onClick={ () => {
      monthIncrement( 1 )
    } }>&gt;</div>
  )
}

export default nextMonth;
