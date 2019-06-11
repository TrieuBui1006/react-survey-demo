import React from 'react';

import {QuestionTypes} from '../../ulitity/constants/Questions';
import SingleLineText from './Questions/SingleLineText';
import MultiLineText from './Questions/MultiLineText';
import Multichoices from './Questions/Multichoices';
import Checkboxes from './Questions/Checkboxes';
import Dropdown from './Questions/Dropdown';

const questionMap = {
    [QuestionTypes.SINGLE_LINE_TEXT]: (props) => {
      return <SingleLineText {...props}/>
    },
    [QuestionTypes.MULTI_LINE_TEXT]: (props) => {
      return <MultiLineText {...props}/>
    },
    [QuestionTypes.MULTI_CHOICE]: (props) => {
      return <Multichoices {...props}/>
    },
    [QuestionTypes.CHECKBOXES]: (props) => {
      return <Checkboxes {...props}/>
    },
    [QuestionTypes.DROPDOWN]: (props) => {
      return <Dropdown {...props}/>
    }
  };

const questionWrapper = (props) => {
    const {question} = props
    let QuestionComponent = questionMap[question.type](question);

    return (
        <div>
            {QuestionComponent}
        </div>
    )
}

export default questionWrapper;
