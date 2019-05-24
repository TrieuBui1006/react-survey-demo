import React from 'react';

const panelButton = (props) => {
    let {className, ...rest} = props;
    return (
        <button {...rest}>{this.props.children}</button>
    );
}

export default panelButton;