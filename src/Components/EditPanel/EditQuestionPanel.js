import React, {Component} from 'react';

import {QuestionTypes} from '../../ulitity/constants/Questions';
import MultichoiceEditer from './QuestionEditer/MultiChoiceEditer';
import TextEditer from './QuestionEditer/TextEditer';

const questionEditorMap = {
    [QuestionTypes.SINGLE_LINE_TEXT]: (question, updateQuestion) => {
        return <TextEditer {...question} updateQuestion={updateQuestion} />
    },
    [QuestionTypes.MULTI_LINE_TEXT]: (question, updateQuestion) => {
        return <TextEditer {...question} updateQuestion={updateQuestion} />
    },
    [QuestionTypes.CHECKBOXES]: (question, updateQuestion) => {
        return <MultichoiceEditer {...question} updateQuestion={updateQuestion} />
    },
    [QuestionTypes.DROPDOWN]: (question, updateQuestion) => {
        return <MultichoiceEditer {...question} updateQuestion={updateQuestion} />
    },
    [QuestionTypes.MULTI_CHOICE]: (question, updateQuestion) => {
        return <MultichoiceEditer {...question} updateQuestion={updateQuestion} />
    }
};

class EditQuestionPanel extends Component {
    render() {
        const {question, updateQuestion} = this.props;
        let mapped='';
        if (questionEditorMap[question.type]) {
            mapped = questionEditorMap[question.type](question, updateQuestion);
          }
        return (
            <div>
            {mapped}
            </div>
        )
    }
}

export default EditQuestionPanel;