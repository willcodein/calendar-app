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
      month: Moment().format('MMMM')
    }
    this.handleData = this.handleData.bind(this);
  }
  handleData(dateChange) {
    this.setState({
      year: dateChange
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pick a date.</h1>
        </header>
        <Month month={ this.state.month }/>
        <Year year={ this.state.date }  handlerFromParent={this.handleData}/>
        <Calendar date={ this.state.date }/>
      </div>
    );
  }
}
