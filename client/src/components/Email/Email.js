import React, { Component } from 'react';
//import classes from './Email.css';
import {Grid, Row, Col} from 'react-bootstrap';

import EmailLeft from './EmailLeft/EmailLeft';
import EmailMiddle from './EmailMiddle/EmailMiddle';
import EmailRight from './EmailRight/EmailRight';
import { NavLink } from 'react-router-dom';

class Email extends Component {

  readEmail = (emailId, event) => {

    //if clicked star, don't read email
    if (event.target.textContent === '★' || event.target.textContent === '☆'){
      return;
    }

    
  }

  render() {


    return (
        <Grid>
        <NavLink to={this.props.id}><Row className="show-grid">
          <Col xs={2}>
           <EmailLeft 
            proPic={this.props.proPic}
            altText={this.props.sender}/>
          </Col>
          <Col xs={8} >
            <EmailMiddle
              read={this.props.read}
              sender={this.props.sender} 
              subject={this.props.subject}
              body={this.props.body}/>
          </Col>
          <Col xs={2}>
           <EmailRight 
              id={this.props.id}
              dateSent={this.props.dateSent}
              starred={this.props.starred}
              read={this.props.read}/>
          </Col>
        </Row>
        <hr/>
        </NavLink>
      </Grid>
     
    );
  }
}

export default Email;
