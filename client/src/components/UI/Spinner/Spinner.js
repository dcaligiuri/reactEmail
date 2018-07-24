import React, {Component} from 'react';
import classes from './Spinner.css';

class Spinner extends Component {

    render(){
     
        return (
            <div className={classes.LdsRing}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    }

   
};


export default Spinner;



