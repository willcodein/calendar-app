import React, { Component } from 'react';

const nextMonth = ({ monthIncrement }) => {
  return (
    <div onClick={ () => {
      monthIncrement( 1 )
    } }>Next button</div>
  )
}

export default nextMonth;
