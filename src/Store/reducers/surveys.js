import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../../ulitity/ulitity';

const initialState = {
    surveys: [],
    loading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_SURVEYS_START:
            return updateObject(state, {loading: true});
        case actionTypes.FETCH_SURVEYS_SUCCESS:
            return updateObject(state, {
                surveys: action.surveys,
                loading: false,
                error: null
            });
        case actionTypes.FETCH_SURVEYS_FAIL:
            return updateObject(state, {loading: false, error: action.error});
        default:
            return state;
    };
};

export default reducer;