import React from 'react'

import withToggle from '../HOCs/withToggle'

function OnOffButton(props) {
  return (
    <div style={{margin: 40, border: '1px solid black', padding: 20}}>
      <h3>press this button to turn it on and off!</h3>
      <button onClick={props.toggle.handleChange}>{props.toggle.value ? 'ON' : 'OFF'}</button>
    </div>
  )
}

export default withToggle(OnOffButton)