import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const NewSurvey = (props) => {
    return <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={props.clicked}
        disabled={props.isLoading || props.error}><Icon>add_circle_outline</Icon> New Survey</Button>
}

export default NewSurvey;
