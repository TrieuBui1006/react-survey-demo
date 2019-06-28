import React from 'react'
import { Field } from 'formik';

import classes from './Question.module.css';

const checkboxes = (props) => {
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
                        <label className={classes.Container}>
                            {option.content}
                            <Field 
                                type="checkbox" 
                                name={`${_id}[${option._id}]`} 
                                component="input"/>
                            <span className={classes.Checkmark}></span>
                        </label>
                    </div>
                )
            })}
          </div>
        </div>
    )
}

export default checkboxes
