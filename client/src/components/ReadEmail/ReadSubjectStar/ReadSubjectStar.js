import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Star from '../../UI/Star/Star';

class ReadSubjectStar extends Component {
    
  render() {

    return (
        <Grid>
            <Row 
                style={{borderLeft: '1px solid grey', 
                        borderRight: '1px solid grey',
                        borderBottom: '1px solid grey'}}>
                <Col xs={10}>
                    {this.props.subject}
                </Col>
                <Col xs={2}>
                    <Star emailId={this.props.emailId} starred={this.props.starred}/>
                </Col>
            </Row>
        </Grid>
    );
  }
}

export default ReadSubjectStar;
