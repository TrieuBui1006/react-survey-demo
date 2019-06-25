import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../../ulitity/ulitity';

const initialState = {
    survey: {
        id: '',
        title: '',
        subTitle: '', 
        questions: {}, 
        question_order: [],
        creatorDate: '',
        lastModified: '',
        submitting: false,
    },
    surveyLoading: false,
    submitLoading: false,
    error: null,
    redirect: false,
    showModal: false,
}

const reducer = (state = initialState, action) => {
    let idx, newOrder;
    switch (action.type) {
        case actionTypes.FETCH_SURVEY_START:
            return updateObject(state, {surveyLoading: true});
        case actionTypes.FETCH_SURVEY_SUCCESS:
            return {
                ...state,
                    survey: {
                        ...state.survey,
                        ...action.payload
                    },
                    surveyLoading: false,
                    error: null
            };
        case actionTypes.FETCH_SURVEY_FAIL:
            return updateObject(state, {surveyLoading: false, error: action.error});
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
        case actionTypes.UPDATE_SURVEY_START:
            return updateObject(state, {submitLoading: true});
        case actionTypes.UPDATE_SURVEY_SUCCESS: 
            return updateObject(state, {submitLoading: false, error: null});
        case actionTypes.UPDATE_SURVEY_FAIL:
            return updateObject(state, {submitLoading:false, error: action.error});
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
        case actionTypes.GET_SURVEY_ID:
            return {
                ...state,
                survey: {
                    ...state.survey,
                    id: action.surveyId
                }
            };
        case actionTypes.RESET_SURVEY_ID:
            return {
                ...state,
                survey: {
                    ...state.survey,
                    id: '',
                    title: '',
                    subTitle: '', 
                    questions: {}, 
                    question_order: [],
                    creatorDate: '',
                    lastModified: '',
                    submitting: false
                },
                redirect: false
            };
        case actionTypes.REDIRECT_PAGE:
            return {
                ...state,
                redirect: true
            }
        case actionTypes.TOGGLE_SUBMIT_SUCCESS:
            return {
                ...state,
                survey: {
                    ...state.survey,
                    submitting: !state.survey.submitting
                }
            }
        case actionTypes.TOGGLE_SUBMIT_FAIL:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.OPEN_MODAL_EDITER:
            return updateObject(state, {showModal: true});
        case actionTypes.CLOSE_MODAL_EDITER:
            return updateObject(state, {showModal: false});
        default:
            return state;
    };
};


export default reducer;