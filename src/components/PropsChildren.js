import React from 'react'

export default function(props) {
  return (
    <div style={{ border: '2px solid purple', margin: 20, padding: 20}}>
      <h3>and example of props.children</h3>
      <h1>Hawaii wins!</h1>
      {props.children}
    </div>
  )
}