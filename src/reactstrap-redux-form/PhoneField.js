import React, {Fragment} from 'react';
import {Col, Label, FormGroup } from 'reactstrap';

import IntlTelInput from 'react-bootstrap-intl-tel-input'
// import InputMask from 'react-input-mask'

class PhoneField extends React.Component {

  render() {
    var {input, meta, ...custom} = this.props;

    function onChangeHandler(data) {
      input.onChange(data)
    }

    return (
      <FormGroup row>
        <Label for={input.name} sm={2}>{custom.label}</Label>
        <Col sm={10}>
          <Fragment>
            {/* <InputMask {...this.props} mask={'+85\\2 9999 9999'} maskChar=' '/> */}
            <IntlTelInput
              removeToken={true}
              preferredCountries={['HK', 'PH']}
              defaultCountry={'HK'}
              onChange={(data) => (onChangeHandler(data))}
            />
          </Fragment>
        </Col>
      </FormGroup>
    )
  }
}

export default PhoneField
