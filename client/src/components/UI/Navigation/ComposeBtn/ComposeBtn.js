import React, {Component} from 'react';
import classes from './ComposeBtn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen} from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router';

class ComposeBtn extends Component {


  render(){


    return (
        <div>
            <button 
                className={classes.ComposeBtn}>
                <FontAwesomeIcon icon={faPen}/>
            </button>
        </div>
    );
    }
};


export default ComposeBtn;