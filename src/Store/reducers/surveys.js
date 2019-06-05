import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../../ulitity/ulitity';

const initialState = {
    surveys: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_SURVEYS_START:
            return updateObject(state, {loading: true});
        case actionTypes.FETCH_SURVEYS_SUCCESS:
            return updateObject(state, {
                surveys: action.surveys,
                loading: false
            });
        case actionTypes.FETCH_SURVEYS_FAIL:
            return updateObject(state, {loading: false});
        default:
            return state;
    };
};

export default reducer;