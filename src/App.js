import React, { Component } from 'react';
import './App.css';
import Year from './components/year/Year.js'
import Moment from 'moment';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      year: Moment().format('YYYY')
    }
    this.handleData = this.handleData.bind(this);
    console.log(this.state.year);
  }
  handleData() {
    console.log('Change handled');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pick a date.</h1>
        </header>

        <Year year={ this.state.year }  handlerFromParent={this.handleData}/>
      </div>
    );
  }
}
