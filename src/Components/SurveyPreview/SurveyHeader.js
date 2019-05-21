import React from 'react';

const surveyHeader = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <p>{props.subTitle}</p>
        </header>
    );
};

export default surveyHeader;