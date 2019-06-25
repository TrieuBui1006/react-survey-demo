import React from 'react';

import {QuestionTypes} from '../../ulitity/constants/Questions';
import SingleLineText from './Questions/SingleLineText';
import MultiLineText from './Questions/MultiLineText';
import Checkboxes from './Questions/Checkboxes';
import Dropdown from './Questions/Dropdown';
import Multichoice from './Questions/Multichoices';
import classes from './QuestionPreviewWrapper.module.css';

import {FaPlus, FaMinus, FaArrowUp, FaArrowDown, FaEdit} from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import lightGreen from '@material-ui/core/colors/lightGreen';
import {withStyles} from '@material-ui/core/styles';

const questionMap = {
    [QuestionTypes.SINGLE_LINE_TEXT]: (props) => {
        return <SingleLineText {...props} />
    },
    [QuestionTypes.MULTI_LINE_TEXT]: (props) => {
        return <MultiLineText {...props} />
    },
    [QuestionTypes.CHECKBOXES]: (props) => {
        return <Checkboxes {...props} />
    },
    [QuestionTypes.DROPDOWN]: (props) => {
        return <Dropdown {...props} />
    },
    [QuestionTypes.MULTI_CHOICE]: (props) => {
        return <Multichoice {...props} />
    }
};

const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(lightGreen['A400']),
      backgroundColor: lightGreen['A400'],
      '&:hover': {
        backgroundColor: lightGreen['A700'],
      },
    },
}))(Button);

let edit = false;
if(window.innerWidth <= 650) {
    edit = true;
}


const QuestionPreviewWrapper = (props) => {
    const {question, onActive, onRemove, onClone, onUp, onDown, showUp, showDown, onOpenModal} = props;
    let quest = questionMap[question.type](question);
    return(
        <div onClick={() => { onActive(question._id) }} className={classes.QuestionPreviewWrapper}>
            {quest}
            <div className={classes.GroupButton}>
                {edit ?
                    <ColorButton
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={(e) => {
                            e.preventDefault();
                            onActive(question._id);
                            onOpenModal();
                        }} ><FaEdit/></ColorButton> : ''
                }
                <ButtonGroup
                    variant="contained"
                    size="large"
                    color="primary"
                    aria-label="Full-width contained primary button group">
                {showUp ?
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={(e) => {
                            e.preventDefault();
                            onUp(question._id);
                        }}>
                        <FaArrowUp />
                    </Button> : ''
                }
                {showDown ? <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={(e) => {
                        e.preventDefault();
                        onDown(question._id);
                    }}>
                    <FaArrowDown />
                </Button> : ''}
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={(e) => { 
                        e.preventDefault();
                        e.stopPropagation(); 
                        onClone(question._id);
                    }}>
                    <FaPlus />
                </Button>
                </ButtonGroup>
                {showUp ? <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={(e) => {
                        e.preventDefault();
                        onRemove(question._id);
                    }}>
                    <FaMinus />
                </Button> : ''}
          </div>
        </div>
    );   
}

export default QuestionPreviewWrapper;