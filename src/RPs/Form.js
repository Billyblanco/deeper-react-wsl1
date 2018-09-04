import React, { Component } from 'react'

export default class Form extends Component {
  handleChange = e => {
    let { value, name } = e.target
    
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    console.log('the form data is:', this.state)
  }
  render() {
    // return this.props.render({ handleChange: this.handleChange, handleSubmit: this.handleSubmit })
    return this.props.children({ handleChange: this.handleChange, handleSubmit: this.handleSubmit })
  }
}