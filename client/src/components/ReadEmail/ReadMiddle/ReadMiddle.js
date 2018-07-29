import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import EmailLeft from '../../Email/EmailLeft/EmailLeft';

class ReadMiddle extends Component {


  render() {

    return (
        <Grid>
            <Row 
                style={{borderLeft: '1px solid grey', 
                        borderRight: '1px solid grey',
                        borderBottom: '1px solid grey'}}>
                <Col xs={2} lg={1}>
                    <EmailLeft 
                        proPic={this.props.proPic}
                        altText={this.props.sender}/>
                </Col>
                <Col xs={8} lg={10}>
                   <p>{this.props.sender}</p>
                   <p>to me</p>
                   <p>{this.props.dateSent}</p>
                </Col>
                <Col xs={2} lg={1}>
                   {/*}empty space{*/}
                </Col>
            </Row>
        </Grid>
    );
  }
}

export default ReadMiddle;
