export const getActiveQuestion = (state) => {
    let activeQuestionId = state.survey.current_question_id;
    let activeQuestion = state.survey.questions[activeQuestionId];
    return activeQuestion ? activeQuestion : {};
};