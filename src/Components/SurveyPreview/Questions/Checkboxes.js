import React from "react";

import classes from './QuestionPreview.module.css';

const checkboxes = (props) => {
  const { title, options, _id, isRequired } = props;
  return (
      <div>
        <h3 className={classes.Label}
          style={{
            color: isRequired ? '#e91e63' : 'black'
          }}>{isRequired ? title + '(*)' : title}</h3>
        <div>
        {options.map((option, index) => {
          return (
              <div key={index}>
                <label>
                  <input 
                    type="checkbox" 
                    disabled name={`${_id}[]`} 
                    value={option._id}/>
                  {option.content}
                </label>
              </div>
          )
        })}
        </div>
      </div>
  );
}

export default checkboxes;