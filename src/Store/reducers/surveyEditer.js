import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    survey: {
        id: '',
        title: 'Survey title',
        subTitle: 'Survey subTitle', 
        questions: {}, 
        question_order: []
    },
    isLoading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    let idx, newOrder;
    switch (action.type) {
        case actionTypes.ADD_QUESTION:
            return {
                ...state,
                survey: {
                    ...state.survey,
                    questions: {
                        ...state.survey.questions,
                        [action.payload._id]: action.payload
                    },
                    question_order: [...state.survey.question_order, action.questionId]
                }
            };
        case actionTypes.ACTIVE_QUESTION:
            return {
                ...state,
                survey: {
                    ...state.survey,
                    current_question_id: action.questionId
                }
            };
        case actionTypes.UPDATE_QUESTION:
            return {
                ...state,
                survey: {
                    ...state.survey,
                    questions: {
                        ...state.survey.questions,
                        [action.questionId]: {
                            ...state.survey.questions[action.questionId],
                            ...action.payload
                        }
                    }
                }
            };
        case actionTypes.UPDATE_SURVEY_HEADER:
            return {
                ...state,
                survey: {
                    ...state.survey,
                    ...action.payload
                }
            };
        case actionTypes.SORT_QUESTION_UP:
            idx = state.survey.question_order.indexOf(action.questionId);
            newOrder = [...state.survey.question_order];
            newOrder[idx] = newOrder[idx - 1];
            newOrder[idx - 1] = action.questionId;
            return {
                ...state,
                survey: {
                ...state.survey,
                question_order: newOrder
                }
            };
        case actionTypes.SORT_QUESTION_DOWN:
            idx = state.survey.question_order.indexOf(action.questionId);
            newOrder = [...state.survey.question_order];
            newOrder[idx] = newOrder[idx + 1];
            newOrder[idx + 1] = action.questionId;
            return {
                ...state,
                survey: {
                ...state.survey,
                question_order: newOrder
                }
            };
        case actionTypes.CLONE_QUESTION:
            idx = state.survey.question_order.indexOf(action.questionId);
            return {
                ...state,
                survey: {
                ...state.survey,
                questions: {
                    ...state.survey.questions,
                    [action.payload._id]: {
                    ...action.payload
                    }
                },
                question_order: [
                    ...state.survey.question_order.slice(0, idx + 1),
                    action.payload._id,
                    ...state.survey.question_order.slice(idx + 1)
                ]
                }
            };
        case actionTypes.REMOVE_QUESTION:
            idx = state.survey.question_order.indexOf(action.questionId);
            let newQuestions = {...state.survey.questions};
            delete newQuestions[action.questionId];
            return {
                ...state,
                survey: {
                ...state.survey,
                questions: newQuestions,
                question_order: [
                    ...state.survey.question_order.slice(0, idx),
                    ...state.survey.question_order.slice(idx + 1)
                ]
                }
            };
        default:
            return state;
    };
};


export default reducer;