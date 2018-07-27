import React, { Component } from 'react';
import classes from './InboxHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch} from '@fortawesome/free-solid-svg-icons';
import {Grid, Row, Col} from 'react-bootstrap';

class InboxHeader extends Component {


    HamburgerClickHandler = () => {
        let nextStatus = !this.props.open;
        this.props.onChangeVersion(nextStatus); 
    }


    render() {
        return (
                <Grid>
                    <Row className={classes.InboxBackground}>
                        <Col xs={2}>
                            <FontAwesomeIcon 
                                onClick={this.HamburgerClickHandler} 
                                className={classes.Hamburger} 
                                icon={faBars} />
                        </Col>
                        <Col xs={8} >
                            <h3 className={classes.InboxHeader}>{this.props.header}</h3>
                        </Col>
                        <Col xs={2} >
                            <FontAwesomeIcon style={{display: 'none'}} className={classes.Hamburger} icon={faSearch} />
                        </Col>
                    </Row>
                </Grid>
    );
  }
}

export default InboxHeader;
