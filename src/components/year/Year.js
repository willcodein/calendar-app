import React, { Component } from 'react';
import './year.css';


const Year = ({ date, handleYear }) => {
  const yearsArr = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  let years = yearsArr.map(year => {
    return <option key={ year }>{ year }</option>
  })

  return(
    <div>
      <select className="year__selector" value={ date.format('YYYY') }  onChange={ handleYear }>
        { years }
      </select>
    </div>
  )
}

export default Year;
