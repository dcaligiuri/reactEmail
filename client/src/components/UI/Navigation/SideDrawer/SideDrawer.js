
import React from 'react';
import classes from './SideDrawer.css';
import Backdrop from '../../../UI/Backdrop/Backdrop';

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
                   <h1>NAV</h1>
                </nav>
            </div>
        </div>
    );
};


export default sideDrawer;