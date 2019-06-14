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
    IsFetching: false,
    IsSubmitting: false,
    isSuccess: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER_SURVEY_START:
            return updateObject(state, {fetching: true});
        case actionTypes.FETCH_USER_SURVEY_SUCCESS:
            return {
                ...state,
                survey: {
                    ...state.survey,
                    ...action.payload
                },
                fetching: false
            }
        case actionTypes.FETCH_USER_SURVEY_FAIL:
            return updateObject(state, {error: action.error, fetching: false});
        case actionTypes.SUBMIT_SURVEY_START:
            return updateObject(state, {submitting: true});
        case actionTypes.SUBMIT_SURVEY_SUCCESS:
            return updateObject(state, {submitting: false, isSuccess: true});
        case actionTypes.SUBMIT_SURVEY_FAIL:
            return updateObject(state, {error: action.error, submitting: false});
        default:
            return state;
    }
}

export default reducer;