import * as actionTypes from './actionsTypes';
import {InitQuestions} from '../../ulitity/constants/Questions';
import tabTypes from '../../ulitity/constants/TabTypes';

export const addQuestion = (questionType) => {
    let newQuestion = InitQuestions[questionType]();
    return {
        type: actionTypes.ADD_QUESTION,
        payload: newQuestion,
        questionId: newQuestion._id
    };
};
 
export const activeQuestion = questionId => dispatch => {
    dispatch({
        type: actionTypes.ACTIVE_QUESTION,
        questionId
      });
      if (questionId === 'header')
        dispatch(switchTab(tabTypes.EDIT_SURVEY_TAB));
      else
        dispatch(switchTab(tabTypes.EDIT_QUESTION_TAB));
};

export const updateQuestion = (qid, params) => {
    return {
      type: actionTypes.UPDATE_QUESTION,
      questionId: qid,
      payload: params
    };
  };

export const updateSurveyHeader = params => {
    return {
        type: actionTypes.UPDATE_SURVEY_HEADER,
        payload: params
    };
};

export const switchTab = (tab) => ({
    type: actionTypes.SWITCH_TAB,
    tab
  });