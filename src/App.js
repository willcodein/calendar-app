import React, { Component } from 'react';
import './App.css';
import Calendar from './components/calendar/Calendar'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <Calendar />
      </div>
    );
  }
}
