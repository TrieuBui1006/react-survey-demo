import React, {Component} from 'react';   
import {connect} from 'react-redux';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import GreenSwitcher from '../UI/Switcher/GreenSwitch';

import {toggleSubmit} from '../../Store/actions/surveyEditer';

import classes from './SurveyItem.module.css';

class SurveyItem extends Component {
    state={
        submitState: false
    }

    componentDidMount() {
        this.setState({submitState: this.props.submitting})
    }

    switchHandler = () => {
        this.setState(prevState => {
            return {submitState: !prevState.submitState}
        })
        this.props.onToggle(this.props.surveyId, this.props.token, !this.state.submitState)

    }

    render() {
        const creatorDate = (new Date(this.props.creatorDate)).toDateString();
        const lastModified = (new Date(this.props.lastModified)).toDateString();

    return (
        <div className={classes.SurveyItem}
            style={{
                backgroundColor: this.state.submitState ? 'rgba(51, 115, 235, 0.253)': 'rgba(204, 204, 204, 0.15)',
                border: this.state.submitState ? '1px solid #3f51b5' : '1px solid #ccc'
            }}>
            <div>
                <h3>{this.props.title}</h3>
                <div>
                    <p><strong>Creator Date:</strong> {creatorDate}</p>
                    <p><strong>Last Update:</strong> {lastModified}</p>
                </div>
            </div>

            <div className={classes.ButtonContainer}>
                <div className={classes.Switcher}>
                    <GreenSwitcher 
                        checked={this.state.submitState}
                        onChange={() => this.switchHandler()}
                        label="collecting" />
                </div>

                <div className={classes.GroupeButton}>
                <Button
                    variant="contained"
                    color="primary" 
                    onClick={this.props.open}><Icon>visibility</Icon>View</Button>
                <Button
                    variant="contained"
                    color="secondary" 
                    onClick={this.props.delete}><Icon>delete</Icon>Delete</Button>
                </div>
            </div>
        </div>
    )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggle: (surveyId, token, submit) => dispatch(toggleSubmit(surveyId, token, submit))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyItem);
