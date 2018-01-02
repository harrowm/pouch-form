import React, {Fragment} from 'react';
import {Col, Input, Label, FormGroup, FormFeedback, FormText} from 'reactstrap';

class TextField extends React.Component {

  render() {
    var {input, meta: { touched, error, warning }, ...custom} = this.props;

    return (
      <FormGroup row>
        <Label for={input.name} sm={2}>{custom.label}</Label>
        <Col sm={10}>
          <Fragment>
            <Input {...(touched ? { valid: (!error).toString() } : 'true')} {...input} {...custom} />
              {custom.help && <FormText>{custom.help}</FormText>}
              {error && <FormFeedback>{error}</FormFeedback>}
              {!error && warning && <FormText>{warning}</FormText>}
          </Fragment>
        </Col>
      </FormGroup>
    )
  }
}

export default TextField
