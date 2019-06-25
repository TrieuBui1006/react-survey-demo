import React from 'react';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const textToIcon = (text) => {
    switch (text) {
        case 'Single Line Text':
            return 'title';
        case 'Multiple Line Text':
            return 'notes';
        case 'Multiple Choice':
            return 'radio_button_checked';
        case 'Checkboxes':
            return 'check_box';
        case 'Dropdown':
            return 'toc';
        default:
            return text;
    }
}

let size = "medium";
if(window.innerWidth <= 400) {
    size = "small";
}

const questionListMoblie = (props) => {
    let { questions, dispatch } = props;

    return (
        <ButtonGroup
            variant="outlined"
            size={size}
            color="default" >
            {questions.map(question => {
                return <Button
                            key={question.text}
                            onClick={() => dispatch(question.action())} ><Icon>{textToIcon(question.text)}</Icon></Button>
            })}
        </ButtonGroup>
    )
}

export default questionListMoblie;
