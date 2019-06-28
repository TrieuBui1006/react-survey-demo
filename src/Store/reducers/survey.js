import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../../ulitity/ulitity';

const initialState = {
    survey: {
        id: '',
        title: '',
        subTitle: '', 
        questions: {}, 
        question_order: [],
        question_required:[],
        creatorDate: '',
        lastModified: '',
        submitting: false,
    },
    isFetching: false,
    isSubmitting: false,
    isSuccess: false,
    isRequired: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER_SURVEY_START:
            return updateObject(state, {isFetching: true});
        case actionTypes.FETCH_USER_SURVEY_SUCCESS:
            return {
                ...state,
                survey: {
                    ...state.survey,
                    ...action.payload
                },
                isFetching: false,
                error: null
            }
        case actionTypes.FETCH_USER_SURVEY_FAIL:
            return updateObject(state, {error: action.error, isFetching: false});
        case actionTypes.SUBMIT_SURVEY_START:
            return updateObject(state, {isSubmitting: true, isRequired: false});
        case actionTypes.SUBMIT_SURVEY_SUCCESS:
            return updateObject(state, {isSubmitting: false, isSuccess: true, error: null});
        case actionTypes.SUBMIT_SURVEY_FAIL:
            return updateObject(state, {error: action.error, isSubmitting: false});
        case actionTypes.SUBMIT_SURVEY_REQUIRED:
            return updateObject(state, {isRequired: true});
        default:
            return state;
    }
}

export default reducer;