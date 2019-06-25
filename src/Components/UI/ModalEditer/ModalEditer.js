import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';

import EditTab from '../../../Containers/EditTab/EditTab';
import classes from './ModalEditer.module.css';
import Backdrop from '../Backdrop/Backdrop';
import IconButton from '@material-ui/core/IconButton';
import {closeModal} from '../../../Store/actions/surveyEditer';
import {FaTimes} from 'react-icons/fa';

class Modal extends Component {
    render() {
        return(
            <Fragment>
                <Backdrop show={this.props.show} clicked={() => this.props.modalClosed()} />
                <div className={classes.ModalEditer}
                style={{
                    transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                    opacity: this.props.show ? '1': '0'
                }}>
                    <div className={classes.Header}>
                        <h3>Edit</h3>
                        <IconButton 
                            size="medium"
                            onClick={() => this.props.modalClosed()} ><FaTimes /></IconButton>
                    </div>
                    <div className={classes.Content}>
                        <EditTab />
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        show: state.surveyEditer.showModal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        modalClosed: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);