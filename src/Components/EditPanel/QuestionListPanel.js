import React from 'react';

import classes from './QuestionListPanel.module.css';

const questionListPanel = (props) => {
    let { questions, dispatch } = props;
    return (
        <div>
            <b>Questions</b>
            <div className={classes.QuestionListPanel}>
                {questions.map(question => {
                    return <button
                                key={question.text}
                                onClick={() => dispatch(question.action())} >{question.text}</button>
                })}
            </div>
        </div>
    );
}

export default questionListPanel;