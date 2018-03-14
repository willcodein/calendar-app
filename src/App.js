import React, { Component } from 'react';
import './app.css';
import Calendar from './components/calendar/Calendar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Calendar />
      </div>
    );
  }
}
