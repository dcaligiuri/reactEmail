import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class ReadEmailBody extends Component {

  render() {


    return (
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              {this.props.body ? this.props.body : null }
            </Col>
          </Row>
        </Grid>
    ); 
  }
}

export default ReadEmailBody;





