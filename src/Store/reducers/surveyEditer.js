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
        default:
            return state;
    };
};


export default reducer;