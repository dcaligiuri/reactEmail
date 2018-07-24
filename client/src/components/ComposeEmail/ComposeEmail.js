
import React, { Component } from 'react';
import classes from './ComposeEmail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

class ComposeEmail extends Component {


  render() {
    return (
      <div className={classes.ComposeBackground}>
        <div style={{display: 'block', height: '5%'}}>
          <NavLink to='/'><FontAwesomeIcon style={{marginTop: '2%'}} icon={faChevronLeft}/></NavLink>
          <FontAwesomeIcon style={{float: 'right', marginTop: '2%'}} icon={faPaperPlane}/>
        </div>
        <input className={classes.Input} placeholder="To"/>
        <input className={classes.Input} placeholder="Subject" />
        <textarea className={classes.Input} style={{height: '85%'}} placeholder="Compose Email" />
      </div>
    );
  }
}

export default ComposeEmail;




