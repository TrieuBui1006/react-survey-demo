import React from 'react';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const EditFooter = (props) => {
    return (
        <div>
            <Button 
                disabled={props.submit}
                variant="contained" 
                color="primary" 
                size="medium"
                onClick={props.clicked}><Icon>save</Icon> Save</Button>
        </div>
    )
}

export default EditFooter;
