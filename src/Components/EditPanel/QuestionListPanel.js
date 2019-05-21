import React from 'react';

const questionListPanel = (props) => {
    let { questions, dispatch } = props;
    return (
        <div>
            <h4>Questions</h4>
            <div>
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