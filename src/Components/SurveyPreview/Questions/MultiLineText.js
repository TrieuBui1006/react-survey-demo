import React from 'react';

const multiLineText = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <textarea type="text" placeholder={props.placeholder} name={props._id} disabled />
        </div>
    );
};

export default multiLineText;