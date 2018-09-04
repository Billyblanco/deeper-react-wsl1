import React, { Component } from 'react'

import withForm from '../HOCs/withForm'

function LoginForm(props) {
  return (
    <div>
      <h1>Login Form</h1>
      <input 
        type="text" 
        name="email" 
        placeholder="email"
        onChange={props.handleChange}/>
      <input 
        type="text" 
        name="password" 
        placeholder="password"
        onChange={props.handleChange}/>
      <button onClick={props.handleSubmit}>submit</button>
    </div>
  )
}

export default withForm(LoginForm)