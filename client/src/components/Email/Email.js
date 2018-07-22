import React, { Component } from 'react';
//import classes from './Email.css';
import {Grid, Row, Col} from 'react-bootstrap';

import EmailLeft from './EmailLeft/EmailLeft';
import EmailMiddle from './EmailMiddle/EmailMiddle';
import EmailRight from './EmailRight/EmailRight';

class Email extends Component {


  render() {
    return (
        <Grid>
        <Row className="show-grid">
          <Col xs={2}>
           <EmailLeft />
          </Col>
          <Col xs={8} >
            <EmailMiddle />
          </Col>
          <Col xs={2}>
           <EmailRight />
          </Col>
          <hr/>
        </Row>
      </Grid>
    );
  }
}

export default Email;
