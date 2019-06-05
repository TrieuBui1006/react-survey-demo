import React from 'react';
import Button from '@material-ui/core/Button';

const NewSurvey = (props) => {
    return <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={props.clicked}>New Survey</Button>
}

export default NewSurvey;
