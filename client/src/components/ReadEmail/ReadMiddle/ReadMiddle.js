import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import EmailLeft from '../../Email/EmailLeft/EmailLeft';

class ReadMiddle extends Component {


  render() {

    return (
        <Grid>
            <Row className="show-grid">
                <Col xs={2}>
                    <EmailLeft 
                        proPic={this.props.proPic}
                        altText={this.props.sender}/>
                </Col>
                <Col xs={8}>
                   <p>{this.props.sender}</p>
                   <p>to me</p>
                   <p>{this.props.dateSent}</p>
                </Col>
                <Col xs={2}>
                   
                </Col>
            </Row>
        </Grid>
    );
  }
}

export default ReadMiddle;
