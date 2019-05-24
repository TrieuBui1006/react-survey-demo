import React from 'react';

const surveyHeader = (props) => {
    let { title, subTitle, onActive } = props;
    return (
        <header onClick={onActive}>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </header>
    );
};

export default surveyHeader;