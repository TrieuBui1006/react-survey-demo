import React from 'react';

import classes from './QuestionPreview.module.css';

const singleLineText = (props) => {
    const {title, placeholder, _id, isRequired} = props;
    return (
        <div>
            <h3 className={classes.Label}
                style={{
                    color: isRequired ? '#e91e63' : 'black'
                }} >{isRequired ? title + '(*)' : title}</h3>
            <input 
                type="text" 
                placeholder={placeholder} 
                name={_id} 
                className={classes.Input}
                disabled />
        </div>
    );
}

export default singleLineText;