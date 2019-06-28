import React from 'react'
import { Field } from 'formik';

import classes from './Question.module.css';

const multichoices = (props) => {
    const { title, options, _id, isRequired } = props;
    return (
        <div className={classes.Question}>
            <h3 className={classes.Label}
                style={{
                    color: isRequired ? '#e91e63' : 'black'
                }} >{isRequired ? title + '(*)' : title}</h3>
            <div className={classes.GroupChoices}>
                {options.map((option, index) => {
                    return (
                        <div key={index}>
                            <label className={classes.RadioContainer}>
                                {option.content}
                                <Field component="input" type="radio" name={_id} value={option._id} />
                                <span className={classes.RadioCheckmark}></span>
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default multichoices;
