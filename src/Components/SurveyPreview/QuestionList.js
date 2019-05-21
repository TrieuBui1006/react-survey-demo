import React from 'react';

import QuestionPreviewWapper from './QuestionPreviewWrapper';
import classes from './QuestionList.module.css';

const questionList = (props) => {
    let { question_order, questions } = props;
    let orderedQuestions = question_order.map(id => questions[id]); 
    return (
        <ul className={classes.QuestionList}>
            {orderedQuestions.map((question, index) => {
                return(
                    <li key={question._id}>
                        <QuestionPreviewWapper
                            question={question} />
                    </li>
                );
            })}
        </ul>
    );
}

export default questionList;