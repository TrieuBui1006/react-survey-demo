import * as actionTypes from './actionsTypes';
import {InitQuestions} from '../../ulitity/constants/Questions';
import tabTypes from '../../ulitity/constants/TabTypes';
import newId from '../../ulitity/idGenerator';
import axios from '../../axios-order';

//--------------------------------------------------------------------------------------------------
export const normalizeSurvey = (survey) => {
  let questions = {};
  survey.questions.forEach(question => {
    questions[question._id] = question
  });
  let question_order = survey.questions.map(question => question._id);
  return {
    title: survey.title,
    subTitle: survey.subTitle,
    questions: questions,
    question_order: question_order,
    current_question_id: '',
    creatorDate: survey.creatorDate,
    lastModified: survey.lastModified,
    submitting: survey.submitting
  };
};

export const assembleSurvey = (survey) => {
  const { title, subTitle, questions, creatorDate, submitting } = survey;
  const lastModified = new Date();
  const orderQuestions = survey.question_order.map(questionId => questions[questionId]);
  return {
    title,
    subTitle,
    questions: [...orderQuestions],
    creatorDate,
    lastModified,
    submitting
  };
};
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
export const fetchSurveyStart = () => {
  return {
    type: actionTypes.FETCH_SURVEY_START
  };
};

export const fetchSurveySuccess = (survey) => {
  return {
    type: actionTypes.FETCH_SURVEY_SUCCESS,
    payload: normalizeSurvey(survey)
  }
}

export const fetchSurveyFail = (err) => {
  return {
    type: actionTypes.FETCH_SURVEY_FAIL,
    error: err
  }
}

export const fetchSurvey = (surveyId, token) => {
  return dispatch => {
    dispatch(fetchSurveyStart());
    const queryParams = '?auth=' + token;
    axios.get('/surveys/' + surveyId + '/content.json' + queryParams) 
      .then(res => {
        dispatch(fetchSurveySuccess(res.data))
      })
      .catch(err => {
        dispatch(fetchSurveyFail(err))
      })
  };
};
//------------------------------------------------------------------------------------------------

export const updateSurveyStart = () => {
  return {
    type: actionTypes.UPDATE_SURVEY_START
  };
};

export const updateSurveySuccess = () => {
  return {
    type: actionTypes.UPDATE_SURVEY_SUCCESS
  };
};

export const updateSurveyFail = (err) => {
  return {
    type: actionTypes.UPDATE_SURVEY_FAIL,
    error: err
  }
}

export const updateSurvey = (surveyId, token, data) => {
  return dispatch => {
    dispatch(updateSurveyStart());
    axios.put('/surveys/'+ surveyId +'/content.json?auth=' + token, data)
      .then(res => {
          dispatch(updateSurveySuccess());
      })
      .catch(err => {
          dispatch(updateSurveyFail(err));
      })
  }
}; 

//------------------------------------------------------------------------------------------------
export const toggleSubmitSuccess = () => {
  return {
    type: actionTypes.TOGGLE_SUBMIT_SUCCESS
  }
}

export const toggleSubmitFail = (err) => {
  return {
    type: actionTypes.TOGGLE_SUBMIT_FAIL,
    error: err
  }
}

export const toggleSubmit = (surveyId, token, submit) => {
  return dispatch => {
    axios.put('/surveys/'+ surveyId +'/content/submitting.json?auth=' + token, submit)
      .then(res => {
        dispatch(toggleSubmitSuccess())
      })
      .catch(err => {
        dispatch(toggleSubmitFail(err))
      });
  }
}

//------------------------------------------------------------------------------------------------
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

export const cloneQuestion = (question) => {
  return {
    type: actionTypes.CLONE_QUESTION,
    payload: {
      ...question,
      _id: newId()
    }
  }
};
//------------------------------------------------------------------------------------------

export const getSurveyId = (surveyId) => {
  return {
    type: actionTypes.GET_SURVEY_ID,
    surveyId: surveyId
  };
};

export const openModal = () => {
  return {
    type: actionTypes.OPEN_MODAL_EDITER
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL_EDITER
  };
};
