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
          <Col xs={7} >
            <EmailMiddle
              sender={this.props.sender} 
              subject={this.props.subject}
              body={this.props.body}/>
          </Col>
          <Col xs={3}>
           <EmailRight 
              starred={this.props.starred}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Email;
