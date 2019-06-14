import React from "react";

import classes from './QuestionPreview.module.css';

const multichoice = (props) => {
    const { title, options, _id } = props;
    return (
        <div>
          <h3 className={classes.Label}>{title}</h3>
          <div>
          {options.map((option, index) => {
            return (
                <div key={index} className="radio">
                  <label>
                    <input 
                      type="radio" 
                      name={_id} 
                      value={option._id} 
                      disabled />
                    {option.content}
                  </label>
                </div>
            )
          })}
          </div>
        </div>
    );
}

export default multichoice;