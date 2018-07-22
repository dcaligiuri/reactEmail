import React, { Component } from 'react';
import classes from './InboxHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Grid, Row, Col} from 'react-bootstrap';

class InboxHeader extends Component {


    HamburgerClickHandler = () => {
        let nextStatus = !this.props.open;
        this.props.onChangeVersion(nextStatus); 
    }


  render() {
    return (
      <div className={classes.InboxBackground}>
        <Grid>
            <Row className="show-grid">
                <Col xs={2}>
                    <FontAwesomeIcon onClick={this.HamburgerClickHandler} className={classes.Hamburger} icon={faBars} />
                </Col>
                <Col xs={8} >
                    <h3 className={classes.InboxHeader}>Inbox</h3>
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default InboxHeader;
