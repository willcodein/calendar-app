import React, { Component } from 'react';

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: this.props.currentDay
    }
  }
  render(){
    return (
      <div>
        <h2>{ this.state.day }</h2>
      </div>
    )
  }
}
