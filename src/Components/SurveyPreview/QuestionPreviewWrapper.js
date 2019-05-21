import React from 'react';

import {QuestionTypes} from '../../ulitity/constants/Questions';
import SingleLineText from './Questions/SingleLineText';
import MultiLineText from './Questions/MultiLineText';
import Checkboxes from './Questions/Checkboxes';
import Dropdown from './Questions/Dropdown';
import Multichoice from './Questions/Multichoices';

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
    const {question} = props;
    let quest = questionMap[question.type](question);
    return(
        <div>
            {quest}
        </div>
    );   
}

export default QuestionPreviewWrapper;