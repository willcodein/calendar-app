import React, { Component } from 'react';
import './App.css';
import Year from './components/year/Year.js'
import Month from './components/month/Month.js'
import Calendar from './components/calendar/Calendar.js'
import Moment from 'moment';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: Moment(),
      year: Moment().format('YYYY'),
      month: Moment().format('MM'),
      day: Moment().format('D')
    }
    this.handleYear = this.handleYear.bind(this);
  }
  handleYear(yearChange) {
    console.log(Moment([yearChange, this.state.month, this.state.day]).format('YYYY'));
    this.setState({
      date: Moment([yearChange, this.state.month, this.state.day]),
      year: yearChange
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pick a date.</h1>
        </header>
        <Month month={ this.state.month }/>
        <Year date={ this.state.date }  handlerFromParent={ this.handleYear }/>
        <Calendar date={ this.state.date }/>
      </div>
    );
  }
}
