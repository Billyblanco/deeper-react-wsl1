import React, { Component } from 'react'

export default class Wizard extends Component {
  static Page = ({ children }) => children

  // static Page = props => {
  //   return props.children
  // }

  state = {
    currentPage: 0,
    maxPage: React.Children.toArray(this.props.children).length - 1
  }

  previous = () => {
    this.setState({
      currentPage: this.state.currentPage - 1
    })
  }

  next = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    })
  }

  render() {
    let { currentPage, maxPage } = this.state
    return (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        {React.Children.toArray(this.props.children)[currentPage]}
        <div>
          {currentPage > 0 && <button onClick={this.previous}>prev</button>}
          {currentPage < maxPage && <button onClick={this.next}>next</button>}
          {currentPage === maxPage && <button onClick={this.props.handleSubmit}>submit</button>}
        </div>
      </div>
    )
  }
}