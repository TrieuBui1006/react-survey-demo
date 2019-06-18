import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../../ulitity/ulitity';

const initialState = {
    survey: {
        title:'',
        subTitle:'',
        questions:''
    },
    results: [],
    rowSelects: {},
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
                rowSelects: {
                    ...state.rowSelects,
                    ...action.payload
                }
            };
        case actionTypes.DELETE_ROW:
            return updateObject(state, {results: [...state.results.filter(result => !action.payload[result.id])]})
        case actionTypes.TOGGLE_ROW_SELECT:
            return {
                ...state,
                rowSelects: {
                    ...state.rowSelects,
                    [action.payload]: !state.rowSelects[action.payload]
                }
            }
        default:
            return state;
    }
}

export default reducer;