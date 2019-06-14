import React from 'react';

import classes from './QuestionPreview.module.css';

const multiLineText = (props) => {
    return (
        <div>
            <h3 className={classes.Label}>{props.title}</h3>
            <textarea 
                type="text" 
                placeholder={props.placeholder} 
                name={props._id}
                className={classes.Textarea} 
                disabled />
        </div>
    );
};

export default multiLineText;