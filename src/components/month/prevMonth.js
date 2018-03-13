import React, { Component } from 'react';

const prevMonth = ({ monthIncrement }) => {
  return (
    <div className="month__prev" onClick={ () => {
      monthIncrement( -1 )
    } }>&lt;</div>
  )
}

export default prevMonth;
