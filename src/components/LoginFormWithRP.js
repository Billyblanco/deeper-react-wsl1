import React from 'react'

import Form from '../RPs/Form'

export default function(props) {
  // return (
    // <Form render={(props) => {
    //   return (
    //     <div>
    //       <h1>Login Form</h1>
    //       <input 
    //         type="text" 
    //         name="email" 
    //         placeholder="email"
    //         onChange={props.handleChange}/>
    //       <input 
    //         type="text" 
    //         name="password" 
    //         placeholder="password"
    //         onChange={props.handleChange}/>
    //       <button onClick={props.handleSubmit}>submit</button>
    //     </div>
    //   )
    // }} />
  // )
  return (
    <Form>
      {props => {
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
      }}
    </Form>
  )
}