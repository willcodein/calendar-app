import React, { Component } from 'react';
import Year from '../year/Year'
import Month from '../month/Month'
import Day from '../day/Day'
import DateDisplay from '../dateDisplay/DateDisplay'
import Moment from 'moment';
import { monthChecker } from '../../utility';

export default class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: Moment(),
      year: Moment().format('YYYY'),
      month: Moment().format('M') -1,
      day: Moment().format('D')
    }
    this.handleYear = this.handleYear.bind(this);
    this.handleMonth = this.handleMonth.bind(this);
    this.monthIncrement = this.monthIncrement.bind(this);
    this.handleDay = this.handleDay.bind(this);
  }
  componentWillMount() {
    if(window.sessionStorage.getItem('year')) {
      this.setState({
        date: Moment([window.sessionStorage.getItem('year'), window.sessionStorage.getItem('month'), window.sessionStorage.getItem('day')]),
        year: window.sessionStorage.getItem('year'),
        month: window.sessionStorage.getItem('month'),
        day: window.sessionStorage.getItem('day')
      })
    }
  }
  componentDidUpdate() {
    window.sessionStorage.setItem('year', this.state.year)
    window.sessionStorage.setItem('month', this.state.month)
    window.sessionStorage.setItem('day', this.state.day)
  }
  handleYear(yearChange) {
    this.setState({
      date: Moment([yearChange.target.value, this.state.month, this.state.day]),
      year: yearChange.target.value
    })
  }
  handleMonth(monthChange) {
    let daysInMonth = Moment([this.state.year, monthChange.target.value]).daysInMonth();
    let newDay = this.state.day > daysInMonth ? daysInMonth : this.state.day;
    this.setState({
      date: Moment([this.state.year, monthChange.target.value, newDay]),
      month: monthChange.target.value,
      day: newDay
    })
  }
  handleDay(dayChange, monthChange = 0) {
    let newTime = monthChecker(monthChange, this.state.month, this.state.day, this.state.date);
    let newYear = Number(this.state.year) + newTime.year === 2021 ? 2010 : Number(this.state.year) + newTime.year === 2009 ? 2020 : Number(this.state.year) + newTime.year;
    this.setState({
      date: Moment([newYear, newTime.month, dayChange]),
      day: dayChange,
      month: newTime.month,
      year: newYear
    })
  }
  monthIncrement(increment) {
    let newTime = monthChecker(increment, this.state.month, this.state.day, this.state.date);
    let newDay = newTime.day;
    let newMonth = newTime.month;
    this.setState({
      date: Moment([Number(this.state.year) + newTime.year, newMonth, newDay]),
      month: newMonth,
      year: Number(this.state.year) + newTime.year,
      day: newDay
    })
  }
  render() {
    return (
      <div className="calendar-container">
        <div className="calendar__display">
          <DateDisplay date={ this.state.date }/>
        </div>
        <div className="calendar__picker">
          <Month date={ this.state.date }  handleMonth={ this.handleMonth }  monthIncrement={ this.monthIncrement }/>
          <Year date={ this.state.date }  handleYear={ this.handleYear }/>
          <Day date={ this.state.date }  handleDay={ this.handleDay }/>
        </div>
      </div>
    );
  }
}
