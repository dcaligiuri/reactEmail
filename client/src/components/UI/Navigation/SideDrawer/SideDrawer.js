import React, {Component} from 'react';
import classes from './SideDrawer.css';
import Backdrop from '../../Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faStar, faArchive, faPaperPlane} from '@fortawesome/free-solid-svg-icons';


class SideDrawer extends Component {


    clickHandler = (display) => {
        if (display !== this.props.display ) {
            this.props.onChangeDisplay(display); 
        }
    }

    render(){
        let attachedClasses = [classes.SideDrawer, classes.Close];
        if (this.props.open){
            attachedClasses = [classes.SideDrawer, classes.Open];
        }


        return (
            <div>
                <Backdrop show={this.props.open} clicked={this.props.closed}/>
                <div className={attachedClasses.join(' ')}>
                    <nav>
                       <h1 onClick={() => this.clickHandler('inbox')} ><FontAwesomeIcon icon={faArchive}/>Inbox</h1>
                       <h1 onClick={() => this.clickHandler('starred')} ><FontAwesomeIcon icon={faStar}/>Starred</h1>
                       <h1 onClick={() => this.clickHandler('trash')} ><FontAwesomeIcon icon={faTrash}/>Trash</h1>
                       <h1 onClick={() => this.clickHandler('sent')} ><FontAwesomeIcon icon={faPaperPlane}/>Sent</h1>
                    </nav>
                </div>
            </div>
        );
    }

   
};


export default SideDrawer;