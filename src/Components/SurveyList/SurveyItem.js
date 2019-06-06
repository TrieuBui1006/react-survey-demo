import React from 'react';   

import Button from '@material-ui/core/Button';
import {FaEdit, FaTimes} from 'react-icons/fa';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {withStyles} from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';

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

const surveyItem = (props) => {
    const creatorDate = (new Date(props.creatorDate)).toDateString();
    const lastModified = (new Date(props.lastModified)).toDateString();

    return (
        <div className={classes.SurveyItem}>
            <div className={classes.Title}>
                <h3>{props.title}</h3>
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
                            color="primary"
                        />
                        }
                        label="Collecting"
                    />
                </div>

                <div className={classes.GroupeButton}>
                <Button
                    variant="contained"
                    color="primary" ><FaEdit/>Edit</Button>
                <Button
                    variant="contained"
                    color="secondary" ><FaTimes/>Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default surveyItem;
