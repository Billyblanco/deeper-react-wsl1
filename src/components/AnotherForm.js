import React, { Component } from 'react'

import withForm from '../HOCs/withForm'

function AnotherForm(props) {
  return (
    <div>
      <h1>Another Form</h1>
      <input 
        type="text" 
        name="address" 
        placeholder="address"
        onChange={props.handleChange}/>
      <input 
        type="text" 
        name="city" 
        placeholder="city"
        onChange={props.handleChange}/>
      <input 
        type="text" 
        name="zip" 
        placeholder="zip"
        onChange={props.handleChange}/>
      <button onClick={props.handleSubmit}>submit</button>
    </div>
  )
}

export default withForm(AnotherForm)