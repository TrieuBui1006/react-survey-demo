import React from 'react';
import Button from '@material-ui/core/Button';
import {FaEdit} from 'react-icons/fa'; 

const NewSurvey = (props) => {
    return <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={props.clicked}
        disabled={props.isLoading || props.error}><FaEdit/> New Survey</Button>
}

export default NewSurvey;
