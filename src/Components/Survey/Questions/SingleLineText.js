import React from 'react';

const singleLineText = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <input type="text" placeholder={props.placeholder} name={props._id}  />
        </div>
    );
}

export default singleLineText;