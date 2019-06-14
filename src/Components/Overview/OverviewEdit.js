import React from 'react';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {withStyles} from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';

import classes from './OverviewEditer.module.css';

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

const overviewEdit = (props) => {
    const creatorDate = new Date(props.creatorDate).toString();
    const lastModified = new Date(props.lastModified).toString();

    return (
        <div className={classes.OverviewEditer}>
            <h2>{props.title}</h2>
            <p><strong>Create At: </strong>{creatorDate}</p>
            <p><strong>Last Modidied At: </strong>{lastModified}</p>
            <FormControlLabel
                control={
                <GreenSwitch
                    checked={props.submit}
                    onChange={props.onToggle}
                />
                }
                label="Is or Not Collecting"/>
            <p><strong>Link of the survey: </strong> <a 
                rel="noopener noreferrer"
                href={"http://localhost:3000/"+ props.userId + "/" + props.surveyId} 
                target="_blank">{"http://localhost:3000/"+ props.userId + "/" + props.surveyId}</a></p>
        </div>
    )
}

export default overviewEdit
