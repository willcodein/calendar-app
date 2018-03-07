import React, { Component } from 'react';

export default class Month extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: this.props.currentMonth
    }
  }
  render(){
    return (
      <div>
        <h2>{ this.state.month }</h2>
      </div>
    )
  }
}
