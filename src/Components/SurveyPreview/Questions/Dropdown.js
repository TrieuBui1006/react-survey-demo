import React from "react";

const dropdown = (props) => {
    const { title, options, _id } = props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div className="form-group">
            <select className="form-control" name={_id}>
              {options.map((option, index) => {
                return (
                    <option value={option._id} key={index}>{option.content}</option>
                )
              })}
            </select>
          </div>
        </div>
    );
}

export default dropdown;