import React from 'react'

import withAuthentication from '../HOCs/withAuthentication'

function SecretComponent(props) {
  return (
    <div style={{ margin: 20, border: '1px solid green'}}>
      <h1>This is top secret!</h1>
      <p>only certain people can see this</p>
    </div>
  )
}

export default withAuthentication(SecretComponent)