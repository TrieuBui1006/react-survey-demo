import * as actionTypes from '../actions/actionsTypes';
import tabTypes from '../../ulitity/constants/TabTypes';

const initialState={
    tab: tabTypes.QUESTIONS_TAB
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.SWITCH_TAB:
            return action.tab;
        default:
            return state;
    }
}

export default reducer;