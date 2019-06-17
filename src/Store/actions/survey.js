import * as actionTypes from './actionsTypes';
import axios from '../../axios-order';
import {normalizeSurvey} from './surveyEditer';
import {isEmty} from '../../ulitity/ulitity';
import newId from '../../ulitity/idGenerator';

export const fetchUserSurveyStart = () => {
    return {
        type: actionTypes.FETCH_USER_SURVEY_START
    }
}

export const fetchUserSurveySuccess = (survey) => {
    return {
        type: actionTypes.FETCH_USER_SURVEY_SUCCESS,
        payload: normalizeSurvey(survey)
    }
} 

export const fetchUserSurveyFail = (err) => {
    return {
        type: actionTypes.FETCH_USER_SURVEY_FAIL,
        error: err
    }
}

export const fetchUserSurvey = (surveyId) => {
    return dispatch => {
        dispatch(fetchUserSurveyStart());
        axios.get('/surveys/' + surveyId + '/content.json')
            .then(res => {
                dispatch(fetchUserSurveySuccess(res.data))
            })
            .catch(err => [
                dispatch(fetchUserSurveyFail(err))
            ])
    };
};

export const submitSurveyStart = () => {
    return {
        type: actionTypes.SUBMIT_SURVEY_START
    }
}

export const submitSurveySuccess = (survey) => {
    return {
        type: actionTypes.SUBMIT_SURVEY_SUCCESS,
        survey: survey
    }
} 

export const submitSurveyFail = (err) => {
    return {
        type: actionTypes.SUBMIT_SURVEY_FAIL,
        error: err
    }
}

export const submitSurvey = (data, surveyId) => {
    return dispatch => {
        dispatch(submitSurveyStart());
        let result={};
        const id = newId();
        if(!isEmty(data)) {
            result = {
                id: id,
                result: {...data},
                surveyId: surveyId,
                submitDate: new Date().toString()
            }
        }
        axios.put('/results/'+ id +'.json', result)
            .then(res => {
                dispatch(submitSurveySuccess())
            })
            .catch(err => {
                dispatch(submitSurveyFail(err))
            })
    }
}