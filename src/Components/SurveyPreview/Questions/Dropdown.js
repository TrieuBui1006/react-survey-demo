import React from "react";

import classes from './QuestionPreview.module.css';

const dropdown = (props) => {
    const { title, options, _id, isRequired } = props;
    return (
        <div>
          <h3 className={classes.Label}
            style={{
              color: isRequired ? '#e91e63' : 'black'
            }} >{isRequired ? title + '(*)' : title}</h3>
          <div>
            <select className={classes.Input} name={_id} disabled>
              {options.map((option, index) => {
                return (
                    <option 
                      value={option._id} 
                      key={option._id}>{option.content}</option>
                )
              })}
            </select>
          </div>
        </div>
    );
}

export default dropdown;