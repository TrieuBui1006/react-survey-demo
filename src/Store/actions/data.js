import * as actionTypes from './actionsTypes';
import axios from '../../axios-order';
import {QuestionTypes} from '../../ulitity/constants/Questions';

export const fetchResults = (surveyId, token) => {
    const queryParams = '?auth=' + token + '&orderBy="surveyId"&equalTo="' + surveyId + '"';
    let fetchResults = [];
    return axios.get('results.json' + queryParams)
        .then(res => {
            for (let key in res.data) {
                fetchResults.push({
                    ...res.data[key]
                });
            }
        return fetchResults;
        })
};

export const fetchSurvey = async (surveyId) => {
    const res = await axios.get('/surveys/' + surveyId + '/content.json');
    return res.data;
};

export const fetchDataStart = () => {
    return {
        type: actionTypes.FETCH_DATA_START
    }
}

export const fetchResultSuccess = (results) => {
    return {
        type: actionTypes.FETCH_RESULT_SUCCESS,
        payload: results
    }
}

export const fetchSurveySuccess = (survey) => {
    return {
        type: actionTypes.FETCH_DATA_SURVEY_SUCCESS,
        payload: survey
    }
}

export const fetchDataFail = (err) => {
    return {
        type: actionTypes.FETCH_DATA_FAIL,
        error: err
    }
}

export const selectAll = (results) => {
    let newState = {};
    results.forEach(result => {
      newState[result._id] = true;
    });
    return {
      type: actionTypes.ROW_SET_ALL,
      payload: newState
    };
};

export const toggleRowSelect = (id) => ({
    type: actionTypes.TOGGLE_ROW_SELECT,
    payload: id
  });

export const unSelectAll = (results) => {
    let newState = {};
    results.forEach(result => {
      newState[result.id] = false;
    });
    return {
      type: actionTypes.ROW_SET_ALL,
      payload: newState
    };
};

export const fetchData = (surveyId, token) => (dispatch) => {
        // console.log([
        //     fetchResults(surveyId, token),
        //     fetchSurvey(surveyId)
        // ]);

        dispatch(fetchDataStart());
        return Promise.all([
            fetchSurvey(surveyId),
            fetchResults(surveyId, token)
        ]).then(values => {
            // console.log(values);
            dispatch(fetchSurveySuccess(values[0]));
            
            dispatch(fetchResultSuccess(values[1]));

            dispatch(unSelectAll(values[1]));
        }).catch(err => {
            dispatch(fetchDataFail(err));
        })
};

const resultToText = {
    [QuestionTypes.CHECKBOXES]: (question, result) => {
      return question.options.filter(option => result[option._id]).map(option => option.content).join(", ");
    },
    [QuestionTypes.MUTLI_LINE_TEXT]: (question, result) => {
      return result;
    },
    [QuestionTypes.SINGLE_LINE_TEXT]: (question, result) => {
      return result;
    },
    [QuestionTypes.DROPDOWN]: (question, result) => {
      return question.options.find(option => option._id === result).content;
    },
    [QuestionTypes.MULTI_CHOICE]: (question, result) => {
      return question.options.find(option => option._id === result).content;
    }
};

export const resultsToGrid = (state) => {
    let { survey, results } = state;
  
    if (!survey || !survey.questions) {
      return {
        columns: [],
        results: []
      };
    }
  
    let columns = survey.questions.map((question, index) => {
      return {
        columnName: question._id,
        displayName: question.title
      };
    });
  
    let questionTypeMap = {};
    survey.questions.forEach(question => {
      questionTypeMap[question._id] = question.type
    });
  
    let textResults = results.map((result, index) => {
      let resultMap = {
        _id: result._id,
        _rev: result._rev
      };
  
      survey.questions.forEach(question => {
        let questionResult = result.result[question._id];
        resultMap[question._id] = questionResult ? resultToText[question.type](question, questionResult) : '';
      });
  
      return resultMap;
    });
  
    return {
      columns,
      results: textResults
    };
  };