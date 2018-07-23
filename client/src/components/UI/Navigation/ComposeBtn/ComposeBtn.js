import React, {Component} from 'react';
import classes from './ComposeBtn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

class ComposeBtn extends Component {


  render(){


    return (
        <div>
            <NavLink to='/compose'>
                <button 
                    className={classes.ComposeBtn}>
                    <FontAwesomeIcon icon={faPen}/>
                </button>
            </NavLink>
            
           
        </div>
    );
    }
};


export default ComposeBtn;