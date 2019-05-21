import React from 'react';

import classes from './SingleLineText.module.css';

const singleLineText = (props) => {
    return (
        <div className={classes.SingleLineText}>
            <h3>{props.title}</h3>
            <input type="text" placeholder={props.placeholder} name={props._id} disabled />
        </div>
    );
}

export default singleLineText;