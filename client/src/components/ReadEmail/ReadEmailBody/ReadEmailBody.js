import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class ReadEmailBody extends Component {

  render() {


    return (
        <Grid>
          <Row 
            style={{borderLeft: '1px solid grey', 
                    borderRight: '1px solid grey',
                    borderBottom: '1px solid grey'}}>
            <Col xs={12}>
              {this.props.body ? this.props.body : null }
            </Col>
          </Row>
        </Grid>
    ); 
  }
}

export default ReadEmailBody;





