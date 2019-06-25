import React from 'react';

import classes from './SurveyHeader.module.css';
import Button from '@material-ui/core/Button';
import lightGreen from '@material-ui/core/colors/lightGreen';
import {withStyles} from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(lightGreen['A400']),
      backgroundColor: lightGreen['A400'],
      '&:hover': {
        backgroundColor: lightGreen['A700'],
      },
    },
}))(Button);

const surveyHeader = (props) => {
    let { title, subTitle, onActive, onOpenModal } = props;
    return (
        <header
            className={classes.SurveyHeader} 
            onClick={onActive}>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <div className={classes.ForMobile}>
                <ColorButton
                            variant="contained"
                            size="small"
                            color="primary"
                            onClick={() => {
                                onActive();
                                onOpenModal();
                            }} ><Icon>edit</Icon></ColorButton>
            </div>
        </header>
    );
};

export default surveyHeader;