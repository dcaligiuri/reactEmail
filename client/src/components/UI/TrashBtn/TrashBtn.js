import React, { Component } from 'react';
import classes from './TrashBtn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

class TrashBtn extends Component {

    markTrashed(emailId){

        fetch('/api/trash/' + emailId, {
            method: 'POST'
        });

    }

    render() {
        return (
            <div>
                <NavLink to="/">
                    <FontAwesomeIcon 
                        onClick={() => this.markTrashed(this.props.emailId)}
                        className={classes.TrashBtn} 
                        icon={faTrash}/>
                </NavLink>
            </div>
        );
  }
}

export default TrashBtn;
