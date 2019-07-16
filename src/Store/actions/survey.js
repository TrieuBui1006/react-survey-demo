import * as actionTypes from './actionsTypes';
import axios from '../../axios-order';
import {isEmty, arrayContainsAnotherArray} from '../../ulitity/ulitity';
import newId from '../../ulitity/idGenerator';

export const normalizeSurveyForSubmit = (survey) => {
    let questions = {};
    survey.questions.forEach(question => {
      questions[question._id] = question
    });
    let question_required = survey.questions.filter(question => question.isRequired === true).map(question => question._id);
    let question_order = survey.questions.map(question => question._id);
    return {
      title: survey.title,
      subTitle: survey.subTitle,
      questions: questions,
      question_order: question_order,
      question_required: question_required,
      current_question_id: '',
      creatorDate: survey.creatorDate,
      lastModified: survey.lastModified,
      submitting: survey.submitting
    };
  };

export const fetchUserSurveyStart = () => {
    return {
        type: actionTypes.FETCH_USER_SURVEY_START
    }
}

export const fetchUserSurveySuccess = (survey) => {
    return {
        type: actionTypes.FETCH_USER_SURVEY_SUCCESS,
        payload: normalizeSurveyForSubmit(survey)
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

export const submitSurveyRequired = () => {
    return {
        type: actionTypes.SUBMIT_SURVEY_REQUIRED
    }
}

export const submitSurvey = (data, surveyId, question_required) => {
    return dispatch => {
        let dataArray = [];
        for (let key in data) {
            dataArray.push({
                ...data[key],
                _id: key
            });
        }
        let dataArrayId = dataArray.map(data => data._id);
        if(arrayContainsAnotherArray(question_required, dataArrayId) === false) {
            dispatch(submitSurveyRequired())
        }else if(arrayContainsAnotherArray(question_required, dataArrayId) === true) {
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
            axios.put('/results/'+ surveyId + '/' + id +'.json', result)
                .then(res => {
                    dispatch(submitSurveySuccess())
                })
                .catch(err => {
                    dispatch(submitSurveyFail(err))
                })
        }
    }
}