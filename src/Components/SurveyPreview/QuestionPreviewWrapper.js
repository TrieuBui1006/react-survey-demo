import React from 'react';

import {QuestionTypes} from '../../ulitity/constants/Questions';
import SingleLineText from './Questions/SingleLineText';
import MultiLineText from './Questions/MultiLineText';
import Checkboxes from './Questions/Checkboxes';
import Dropdown from './Questions/Dropdown';
import Multichoice from './Questions/Multichoices';
import classes from './QuestionPreviewWrapper.module.css';

import {FaPlus, FaMinus, FaArrowUp, FaArrowDown} from 'react-icons/fa'
import Button from '@material-ui/core/Button';

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

const QuestionPreviewWrapper = (props) => {
    const {question, onActive, onRemove, onClone, onUp, onDown, showUp, showDown} = props;
    let quest = questionMap[question.type](question);
    return(
        <div onClick={() => { onActive(question._id) }} className={classes.QuestionPreviewWrapper}>
            {quest}
            <div className={classes.GroupButton}>
                {showUp ?
                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
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
                    size="medium"
                    onClick={(e) => {
                        e.preventDefault();
                        onDown(question._id);
                    }}>
                    <FaArrowDown />
                </Button> : ''}
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    onClick={(e) => { 
                        e.preventDefault();
                        e.stopPropagation(); 
                        onClone(question._id);
                    }}>
                    <FaPlus />
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="medium"
                    onClick={(e) => {
                        e.preventDefault();
                        onRemove(question._id);
                    }}>
                    <FaMinus />
                </Button>
          </div>
        </div>
    );   
}

export default QuestionPreviewWrapper;