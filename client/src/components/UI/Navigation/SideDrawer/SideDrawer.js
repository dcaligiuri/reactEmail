import React, {Component} from 'react';
import classes from './SideDrawer.css';
import Backdrop from '../../Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faStar, faArchive, faPaperPlane} from '@fortawesome/free-solid-svg-icons';


class SideDrawer extends Component {


    clickHandler = (display) => {
        this.props.onChangeDisplay(display); 
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
                    <img 
                        className="img-responsive" 
                        src="https://officialpsds.com/imageview/r6/v0/r6v0v1_large.png?1521316506"
                        alt="Bart"/> 
                    <p>Bart Simpson</p>
                    <p>bart@mail.com</p>
                    <hr />
                    <nav>
                        <h1 onClick={() => this.clickHandler('Inbox')} ><FontAwesomeIcon icon={faArchive}/>Inbox</h1>
                        <h1 onClick={() => this.clickHandler('Starred')} ><FontAwesomeIcon icon={faStar}/>Starred</h1>
                        <h1 onClick={() => this.clickHandler('Trash')} ><FontAwesomeIcon icon={faTrash}/>Trash</h1>
                        <h1 onClick={() => this.clickHandler('Sent')} ><FontAwesomeIcon icon={faPaperPlane}/>Sent</h1>
                    </nav>
                </div>
            </div>
        );
    }

   
};


export default SideDrawer;