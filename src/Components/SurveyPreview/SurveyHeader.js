import React from 'react';

import classes from './SurveyHeader.module.css';

const surveyHeader = (props) => {
    let { title, subTitle, onActive } = props;
    return (
        <header
            className={classes.SurveyHeader} 
            onClick={onActive}>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </header>
    );
};

export default surveyHeader;