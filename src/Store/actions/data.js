import * as actionTypes from './actionsTypes';
import axios from '../../axios-order';

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
