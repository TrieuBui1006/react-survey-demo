import React from 'react';

import Button from '@material-ui/core/Button';
import {FaTimes} from 'react-icons/fa';

import classes from './OverviewData.module.css';

const overviewData = (props) => {
    return (
        <div className={classes.Container}>
            <div className={classes.OverviewData}>
                <p><strong>Current result Count:</strong> 0</p>
                <p><strong>Current result Today:</strong> 0</p>
                <p><strong>Last Submit As:</strong> Fri Jun 07 2019</p>
            </div>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={props.delete}><FaTimes/> Delete</Button>
        </div>
    )
}

export default overviewData
