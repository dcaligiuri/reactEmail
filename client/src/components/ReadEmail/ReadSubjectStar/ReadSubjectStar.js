import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class ReadSubjectStar extends Component {


  render() {

    let star = null;
    if (this.props.starred === true){
      star = <span style={{color: 'yellow'}}>★</span>
    }
    else if (this.props.starred === false){
      star = <span>☆</span>
    }


    return (
        <Grid>
            <Row>
                <Col xs={10}>
                    {this.props.subject}
                </Col>
                <Col xs={2}>
                    {star}
                </Col>
            </Row>
        </Grid>
    );
  }
}

export default ReadSubjectStar;
