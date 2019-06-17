import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../../ulitity/ulitity';

const initialState = {
    survey: {
        title:'',
        subTitle:'',
        questions:''
    },
    results: [],
    rowSelect: {},
    isLoading: false,
    error: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA_START:
            return updateObject(state, {isLoading: true});
        case actionTypes.FETCH_DATA_SURVEY_SUCCESS:
            return {
                ...state,
                survey: {
                    ...state.survey,
                    ...action.payload
                },
                isLoading: false
            };
        case actionTypes.FETCH_RESULT_SUCCESS:
            return {
                ...state,
                results: action.payload,
                isLoading: false
            };
        case actionTypes.FETCH_DATA_FAIL:
            return updateObject(state, {isLoading: false, error: action.error});
        case actionTypes.ROW_SET_ALL:
            return {
                ...state,
                rowSelect: {
                    ...state.rowSelect,
                    ...action.payload
                }
            };
        default:
            return state;
    }
}

export default reducer;