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
        default:
            return state;
    };
};


export default reducer;