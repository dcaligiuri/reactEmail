import React from 'react';
import classes from './SideDrawer.css';
import Backdrop from '../../Backdrop/Backdrop';

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
                   <h1>INBOX</h1>
                   <h1>STARRED</h1>
                   <h1>TRASH</h1>
                </nav>
            </div>
        </div>
    );
};


export default sideDrawer;