import React from 'react'
import { Field } from 'formik';

import classes from './Question.module.css';

const dropdown = (props) => {
    const { title, options, _id } = props;
    return (
        <div className={classes.Question}>
            <h3 className={classes.Label}>{title}</h3>
            <div>
                <Field component="select" name={_id} className={classes.Input}>
                    <option></option>
                    {options.map((option, index) => {
                        return (
                            <option value={option._id} key={option._id}>{option.content}</option>
                        )
                    })}
                </Field>
            </div>
        </div>
    )
}

export default dropdown
