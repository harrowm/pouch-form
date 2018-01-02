import React from 'react';
import {Col, Row, Input, Label, FormGroup} from 'reactstrap';

class StaticField extends React.Component {

  render() {
    var {label, value, id, name} = this.props;

    return (
      <FormGroup row>
        <Label for={name} sm={2}>{label}</Label>
        <Col sm={10}>
          <Input plaintext id={id} name={name} disabled placeholder={value}/>
        </Col>
      </FormGroup>
    )
  }
}

export default StaticField
