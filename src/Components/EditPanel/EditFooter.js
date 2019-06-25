import React from 'react';

import Button from '@material-ui/core/Button';
import {FaRegSave} from 'react-icons/fa';

const EditFooter = (props) => {
    return (
        <div>
            <Button 
                disabled={props.submit}
                variant="contained" 
                color="primary" 
                size="medium"
                onClick={props.clicked}><FaRegSave/> Save</Button>
        </div>
    )
}

export default EditFooter;
