import React from 'react';
import classes from './SideDrawer.css';
import Backdrop from '../../Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faStar, faArchive, faPaperPlane} from '@fortawesome/free-solid-svg-icons';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }


    return (
        <div>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    
                   <h1><FontAwesomeIcon icon={faArchive}/>Inbox</h1>
                   <h1><FontAwesomeIcon icon={faStar}/>Starred</h1>
                   <h1><FontAwesomeIcon icon={faTrash}/>Trash</h1>
                   <h1><FontAwesomeIcon icon={faPaperPlane}/>Sent</h1>
                </nav>
            </div>
        </div>
    );
};


export default sideDrawer;