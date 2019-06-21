import React from 'react';

import Button from '@material-ui/core/Button';
import {FaTrashAlt} from 'react-icons/fa';

import classes from './OverviewData.module.css';

const overviewData = (props) => {
    return (
        <div className={classes.Container}>
            <div className={classes.OverviewData}>
                <p><strong>Current result Count:</strong> {props.count}</p>
                <p><strong>Current result Today:</strong> {props.currentCount}</p>
                <p><strong>Last Submit As:</strong> {props.lastSubmit}</p>
            </div>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={props.delete}><FaTrashAlt/> Delete</Button>
        </div>
    )
}

export default overviewData
