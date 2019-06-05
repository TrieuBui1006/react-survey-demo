import * as actionTypes from './actionsTypes';
import axios from '../../axios-order';

export const fetchSurveysSuccess = (surveys) => {
    return {
        type: actionTypes.FETCH_SURVEYS_SUCCESS,
        surveys: surveys
    };
};

export const fetchSurveysFail = (err) => {
    return {
        type: actionTypes.FETCH_SURVEYS_FAIL,
        error: err
    };
};

export const fetchSurveysStart = () => {
    return {
        type: actionTypes.FETCH_SURVEYS_START
    };
};

export const fetchSurveys = (token, userId) => {
    return dispatch => {
        dispatch(fetchSurveysStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/surveys.json' + queryParams)
            .then(res => {
                const fetchSurveys = [];
                for (let key in res.data) {
                    fetchSurveys.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchSurveysSuccess(fetchSurveys));
            })
            .catch(err => {
                dispatch(fetchSurveysFail(err));
            });
    };
};