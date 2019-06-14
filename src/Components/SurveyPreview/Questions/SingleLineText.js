import React from 'react';

import classes from './QuestionPreview.module.css';

const singleLineText = (props) => {
    return (
        <div>
            <h3 className={classes.Label}>{props.title}</h3>
            <input 
                type="text" 
                placeholder={props.placeholder} 
                name={props._id} 
                className={classes.Input}
                disabled />
        </div>
    );
}

export default singleLineText;