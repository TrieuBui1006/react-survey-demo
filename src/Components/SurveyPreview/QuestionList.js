import React from 'react';

import QuestionPreviewWapper from './QuestionPreviewWrapper';
import classes from './QuestionList.module.css';

const questionList = (props) => {
    let { question_order, questions, current_question_id} = props;
    let orderedQuestions = question_order.map(id => questions[id]); 
    return (
        <ul className={classes.QuestionList}>
            {orderedQuestions.map((question, index) => {
                return(
                    <li key={question._id}>
                        <QuestionPreviewWapper
                            question={question}
                            showUp={index !== 0}
                            showDown={index !== orderedQuestions.length - 1}
                            isActive={current_question_id === question._id}
                            onActive={() => props.onActive(question._id)}
                            onRemove={() => props.onRemove(question)}
                            onClone={() => props.onClone(question, question._id)}
                            onUp={() => props.onUp(question)}
                            onDown={() => props.onDown(question)}
                            onOpenModal={() => props.onOpenModal()} />
                    </li>
                );
            })}
        </ul>
    );
}

export default questionList;