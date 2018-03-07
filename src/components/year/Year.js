import React, { Component } from 'react';

export default class Year extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: this.props.year,
      years: [
        Number(this.props.year) - 1,
        this.props.year,
        Number(this.props.year) + 1
      ]
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    // e.preventDefault();
    // console.log(e.target.value);
    // this.changeHandler();
    this.props.handlerFromParent();
  }
  render(){
    let years = this.state.years.map(year => {
      return <option key={ year }>{ year }</option>
    })
    return(
      <div>
        <select value={ this.state.year }  onChange={ this.handleChange }>
          { years }
        </select>
      </div>
    )
  }
}
