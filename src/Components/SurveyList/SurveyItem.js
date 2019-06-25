import React, {Component} from 'react';   
import {connect} from 'react-redux';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {withStyles} from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';

import {toggleSubmit} from '../../Store/actions/surveyEditer';

import classes from './SurveyItem.module.css';

const GreenSwitch = withStyles({
    switchBase: {
      color: lightGreen['A400'],
      '&$checked': {
        color: lightGreen['A700'],
      },
      '&$checked + $track': {
        backgroundColor: lightGreen['A700'],
      },
    },
    checked: {},
    track: {},
})(Switch);

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
        <div className={classes.SurveyItem}>
            <div>
                <h3>{this.props.title}</h3>
                <div>
                    <p><strong>Creator Date:</strong> {creatorDate}</p>
                    <p><strong>Last Update:</strong> {lastModified}</p>
                </div>
            </div>

            <div className={classes.ButtonContainer}>
                <div className={classes.Switcher}>
                    <FormControlLabel
                        control={
                        <GreenSwitch
                            checked={this.state.submitState}
                            onChange={() => this.switchHandler()}
                        />
                        }
                        label="Collecting"
                    />
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
