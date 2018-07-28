import React, { Component } from 'react';
import classes from './MarkReadBtn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

class MarkReadBtn extends Component {


    markRead(emailId){
        fetch('/api/markRead/' + emailId, {
            method: 'POST'
        });
    }


    render() {
        return (
            <div>
                <NavLink to="/"><FontAwesomeIcon 
                    onClick={() => this.markRead(this.props.emailId)} 
                    className={classes.MarkReadBtn} 
                    icon={faEnvelope} />
                </NavLink>
            </div>
        );
  }
}

export default MarkReadBtn;
