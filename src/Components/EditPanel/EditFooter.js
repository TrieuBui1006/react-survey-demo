import React from 'react';

import Button from '@material-ui/core/Button';

const EditFooter = (props) => {
    return (
        <div>
            <Button 
                variant="contained" 
                color="primary" 
                size="medium"
                onClick={props.clicked}>Submit</Button>
        </div>
    )
}

export default EditFooter;
