import React from "react";

const checkboxes = (props) => {
  const { title, options, _id } = props;
  return (
      <div>
        <h3 className="question-title">{title}</h3>
        <div>
        {options.map((option, index) => {
          return (
              <div className="checkbox" key={index}>
                <label>
                  <input type="checkbox" disabled name={`${_id}[]`} value={option._id}/>
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