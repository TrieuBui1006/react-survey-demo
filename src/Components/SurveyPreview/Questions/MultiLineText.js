import React from 'react';

import classes from './QuestionPreview.module.css';

const multiLineText = (props) => {
    const {title, placeholder, _id, isRequired} = props
    return (
        <div>
            <h3 className={classes.Label}
                style={{
                    color: isRequired ? '#e91e63' : 'black'
                }} >{isRequired ? title + '(*)' : title}</h3>
            <textarea 
                type="text" 
                placeholder={placeholder} 
                name={_id}
                className={classes.Textarea} 
                disabled />
        </div>
    );
};

export default multiLineText;