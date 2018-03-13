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
    if(window.sessionStorage.getItem('date')) {
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
    this.setState({
      date: Moment([this.state.year, monthChange.target.value, this.state.day]),
      month: monthChange.target.value
    })
  }
  handleDay(dayChange, monthChange = 0) {
    let newTime = monthChecker(monthChange, this.state.month);
    console.log(Number(this.state.year) + newTime.year);
    let newYear = Number(this.state.year) + newTime.year < 2021 ? Number(this.state.year) + newTime.year : 2010;
    console.log(newYear);
    this.setState({
      date: Moment([newYear, newTime.month, dayChange]),
      day: dayChange,
      month: newTime.month,
      year: newYear
    })
  }
  monthIncrement(increment) {
    let newTime = monthChecker(increment, this.state.month);
    this.setState({
      date: Moment([Number(this.state.year) + newTime.year, newTime.month, this.state.day]),
      month: newTime.month,
      year: Number(this.state.year) + newTime.year
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
