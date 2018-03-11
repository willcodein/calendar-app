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
      month: Moment().format('M'),
      day: Moment().format('D')
    }
    this.handleYear = this.handleYear.bind(this);
    this.handleMonth = this.handleMonth.bind(this);
    this.monthIncrement = this.monthIncrement.bind(this);
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
    var newMonth;
    switch(e) {
      case -1:
        newMonth = (Number(this.state.month) + e === -1 ? 11 : Number(this.state.month) + e)
        break;
      case 1:
        newMonth = (Number(this.state.month) + e === 12 ? 0 : Number(this.state.month) + e)
        break;
    }
    this.setState({
      month: newMonth
    })
  }
  handleDay(dayChange) {
    this.setState({
      date: Moment([this.state.year, this.state.month, dayChange.target.value]),
      day: dayChange.target.value
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
