import React from 'react';
import { Field } from 'formik';

import classes from './Question.module.css';

const multiLineText = (props) => {
    return (
        <div className={classes.Question}>
            <h3 className={classes.Label}>{props.title}</h3>
            <div>
                <Field 
                    type="text" 
                    placeholder={props.placeholder} 
                    name={props._id} 
                    className={classes.Textarea}
                    component='textarea' />
            </div>
        </div>
    )
}

export default multiLineText;
