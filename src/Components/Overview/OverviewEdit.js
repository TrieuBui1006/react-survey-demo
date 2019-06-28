import React from 'react';

import GreenSwitcher from '../UI/Switcher/GreenSwitch';

import classes from './OverviewEditer.module.css';

const overviewEdit = (props) => {
    const creatorDate = new Date(props.creatorDate).toString();
    const lastModified = new Date(props.lastModified).toString();

    return (
        <div className={classes.OverviewEditer}>
            <h2>{props.title}</h2>
            <p><strong>Create At: </strong>{creatorDate}</p>
            <p><strong>Last Modidied At: </strong>{lastModified}</p>
            <GreenSwitcher
              checked={props.submit}
              onChange={props.onToggle}
              label="Is or Not Collecting (turn it on to allow submit!)" />
            <p><strong>Link for respondents :</strong></p> 
            <a 
              rel="noopener noreferrer"
              href={"http://localhost:3000/"+ props.surveyId + "/" + props.userId} 
              target="_blank">{"http://localhost:3000/"+ props.surveyId + "/" + props.userId}</a>
        </div>
    )
}

export default overviewEdit;
