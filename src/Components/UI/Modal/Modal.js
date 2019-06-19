import React, {Fragment, Component} from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import IconButton from '@material-ui/core/IconButton';
import {FaTimes} from 'react-icons/fa';

class Modal extends Component {

    // shouldComponentUpdate(nextProps, nextState){
    //     return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    // }  

    render() {
        let {columns, result } = this.props;
        return(
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                    opacity: this.props.show ? '1': '0'
                }}>
                    <div className={classes.Header}>
                        <h3>Result Data</h3>
                        <IconButton 
                            size="medium"
                            onClick={this.props.modalClosed} ><FaTimes /></IconButton>
                    </div>
                    <div className={classes.Content}>
                        <ul>
                            {columns.map(col => {
                                let { displayName, columnName } = col;
                                return (
                                    <li key={columnName}>
                                    <h4>{displayName}</h4>
                                    <p>{result[columnName]}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Modal;