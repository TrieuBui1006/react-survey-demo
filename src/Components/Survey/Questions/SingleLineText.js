import React from 'react';
import { Field } from 'formik';

import classes from './Question.module.css';

const singleLineText = (props) => {
    return (
        <div className={classes.Question}>
            <h3 className={classes.Label}
                style={{
                    color: props.isRequired ? '#e91e63' : 'black'
                }} >{props.isRequired ? props.title + '(*)' : props.title}</h3>
            <div>
                <Field 
                    type="text" 
                    placeholder={props.placeholder} 
                    name={props._id} 
                    className={classes.Input} 
                    component='input' />
            </div>
        </div>
    );
}

export default singleLineText;