
import React, { Component } from 'react';
import classes from './ComposeEmail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

class ComposeEmail extends Component {


  render() {
    return (
      <div className={classes.ComposeBackground}>
        <div style={{display: 'block'}}>
          <NavLink to='/'><FontAwesomeIcon icon={faChevronLeft}/></NavLink>
          <FontAwesomeIcon style={{float: 'right'}} icon={faPaperPlane}/>
        </div>
        <hr />
        <input style={{display: 'block', width: '100%'}}/>
        <input style={{display: 'block', width: '100%'}}/>
        <textarea style={{display: 'block', width: '100%'}}/>
      </div>
    );
  }
}

export default ComposeEmail;




