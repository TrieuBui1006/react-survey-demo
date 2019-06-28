import React from 'react';
import { Field } from 'formik';

import classes from './Question.module.css';

const multiLineText = (props) => {
    const {title, placeholder, _id, isRequired} = props;
    return (
        <div className={classes.Question}>
            <h3 className={classes.Label}
                style={{
                    color: isRequired ? '#e91e63' : 'black'
                }} >{isRequired ? title + '(*)' : title}</h3>
            <div>
                <Field 
                    type="text" 
                    placeholder={placeholder} 
                    name={_id} 
                    className={classes.Textarea}
                    component='textarea' />
            </div>
        </div>
    )
}

export default multiLineText;
