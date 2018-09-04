import React, { Component } from 'react'

export default function(WrappedComponent) {

  return class WithForm extends Component {
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
      let form = { ...this.state }
      
      return <WrappedComponent 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                {...this.props}
                form={form}/>
    }
  }
}




