import React from 'react'

import Wizard from '../RPs/Wizard'
import withForm from '../HOCs/withForm'

function ApplicationForm(props) {
  return (
    <div style={{ margin: 20, padding: 20, border: '1px solid black', background: 'pink'}}>
      <h1>Application Form</h1>
      <Wizard handleSubmit={props.handleSubmit}>
        <Wizard.Page>
          <div>
            <input type="name" name="name" placeholder="full name" onChange={props.handleChange} value={props.form.name || ''}/>
            <input type="email" name="email" placeholder="email" onChange={props.handleChange} value={props.form.email || ''}/>
            <input type="password" name="password" placeholder="password" onChange={props.handleChange} value={props.form.password || ''}/>
          </div>
        </Wizard.Page>
        <Wizard.Page>
          <div>
            <input type="address" name="address" placeholder="address" onChange={props.handleChange} value={props.form.address || ''}/>
            <input type="city" name="city" placeholder="city" onChange={props.handleChange} value={props.form.city || ''}/>
            <input type="state" name="state" placeholder="state" onChange={props.handleChange} value={props.form.state || ''}/>
            <input type="zip" name="zip" placeholder="zip" onChange={props.handleChange} value={props.form.zip || ''}/>
          </div>
        </Wizard.Page>
        <Wizard.Page>
          <div>
            <h1>I hope you guys are having fun</h1>
          </div>
        </Wizard.Page>
        <Wizard.Page>
          <h1>this is where you submit your form</h1>
        </Wizard.Page>
      </Wizard>
    </div>
  )
}

export default withForm(ApplicationForm)