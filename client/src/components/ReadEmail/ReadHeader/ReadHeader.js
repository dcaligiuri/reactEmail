import React, { Component } from 'react';
import classes from './ReadHeader.css';
import {Grid, Row, Col} from 'react-bootstrap';
import BackBtn from '../../UI/Navigation/BackBtn/BackBtn';
import TrashBtn from '../../UI/TrashBtn/TrashBtn';
import MarkReadButton from '../../UI/MarkReadBtn/MarkReadBtn';

class ReadHeader extends Component {

    render() {
        return (
            <Grid>
            <Row className={classes.ReadHeaderBackground}>
                <Col xs={1}>
                    <BackBtn style={{color:'white', marginTop:'22.625px', marginBottom:'22.625px'}} />
                </Col>
                <Col xs={8} >
                    {/*}empty columns{*/}
                </Col>
                <Col xs={1} >
                    <TrashBtn emailId={this.props.emailId}/>
                </Col>
                <Col xs={1} >
                    <MarkReadButton emailId={this.props.emailId}/>
                </Col>
            </Row>
        </Grid>
        )
    }
}

export default ReadHeader;



