import React, { Component } from 'react';
import './App.css';
import Year from './components/year/Year.js'
import Month from './components/month/Month.js'
import Day from './components/day/Day.js'
import Moment from 'moment';

export default class App extends Component {
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
  monthIncrement(e) {
    var newMonth, newYear;
    switch(e) {
      case -1:
        newMonth = (Number(this.state.month) + e === -1 ? 11 : Number(this.state.month) + e)
        newYear = newMonth === 11 ? -1 : 0;
        break;
      case 1:
        newMonth = (Number(this.state.month) + e === 12 ? 0 : Number(this.state.month) + e)
        newYear = newMonth === 0 ? 1 : 0;
        break;
    }
    this.setState({
      date: Moment([Number(this.state.year) + newYear, newMonth, this.state.day]),
      month: newMonth,
      year: Number(this.state.year) + newYear
    })
  }
  handleDay(dayChange, monthChange = 0) {
    console.log(dayChange, monthChange);
    var newMonth;
    var newYear = 0;
    switch(monthChange) {
      case -1:
        newMonth = (Number(this.state.month) + monthChange === -1 ? 11 : Number(this.state.month) + monthChange)
        newYear = newMonth === 11 ? -1 : 0;
        break;
      case 1:
        newMonth = (Number(this.state.month) + monthChange === 12 ? 0 : Number(this.state.month) + monthChange)
        newYear = newMonth === 0 ? 1 : 0;
        break;
    }
    console.log(Number(this.state.year) + newYear);
    this.setState({
      date: Moment([Number(this.state.year) + newYear, Number(this.state.month) + monthChange, dayChange]),
      day: dayChange,
      month: Number(this.state.month) + monthChange,
      year: Number(this.state.year) + newYear
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pick a date.</h1>
        </header>
        <Month date={ this.state.date }  handleMonth={ this.handleMonth }  monthIncrement={ this.monthIncrement }/>
        <Year date={ this.state.date }  handleYear={ this.handleYear }/>
        <Day date={ this.state.date }  handleDay={ this.handleDay }/>
      </div>
    );
  }
}
