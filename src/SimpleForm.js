import { Col, Form, Button } from 'reactstrap'

import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { Offline } from 'react-detect-offline'

// import StaticField from './reactstrap-redux-form/StaticField'
import MailField from './reactstrap-redux-form/MailField'
import TextField from './reactstrap-redux-form/TextField'
// import DateField from './reactstrap-redux-form/DateField'
import PhoneField from './reactstrap-redux-form/PhoneField'


const validate = values => {
  const errors = {}
  const requiredFields = [
    'email'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}

// class SimpleForm extends React.Component {
let SimpleForm = props => {

  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <div className="col-md-10 offset-md-1">
      <span className="anchor" id="formComplex"></span>
      <h3>Register your client's interest</h3>
      Register your client's by entering the following information
      <Offline>
        <hr className='my-2'></hr>
        You are currently offline. You may still save the registration and the information
        will be automatically syncronized when the network is available.
      </Offline>
      <hr className='my-2'></hr>
      <Form onSubmit={handleSubmit}>
        {/* <Col>
          <StaticField id='firstName' name='firstName' label='First Name' value='Steve'/>
        </Col> */}
        <Col>
          <Field id='firstName' name='firstName' label='First Name' component={TextField}/>
        </Col>
        <Col>
          <Field id='lastName' name='lastName' label='Last Name' component={TextField}/>
        </Col>
        <Col>
          <Field id='email' name='email' label='eMail' component={MailField} />
          {/* help='enter a valid email address' /> */}
        </Col>
        <Col>
          <Field id='mobile' name='mobile' label='Mobile' mask='999  999' component={PhoneField} />
          {/* help='enter a valid email address' /> */}
        </Col>
        {/* <Col>
        <IntlTelInput
          preferredCountries={['HK', 'PH']}
          defaultCountry={'HK'}
          // defaultValue={'+1 555-555-5555'}
          // onChange={(data) => this.onChangeHandler(data)}
        />
      </Col> */}
        {/* <Col>
          <Field id='dob' name='dob' label='Date of Birth' component={DateField}/>
        </Col> */}
        {/* <Col>
          <Field id='ID' name='ID' label='ID number'
          placeholder='Enter your SSS or GSS number' component={TextField}/>
        </Col> */}
        <Col sm={{ size: 10, offset: 2 }}>
          <Button type="submit" color='primary' disabled={pristine || submitting}>
            Submit
          </Button>{' '}
          <Button type="button" colour='secondary' disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </Button>
        </Col>
      </Form>
      <hr className='my-2'></hr>
    </div>

  )
}



SimpleForm = reduxForm({
  form: 'simple', // a unique identifier for this form
  validate
})(SimpleForm)

SimpleForm = connect(
  state => ({
    initialValues: {
      // dob: null
    }
  })
)(SimpleForm)

export default SimpleForm
