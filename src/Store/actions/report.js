import * as actionTypes from './actionsTypes';
import {QuestionTypes} from '../../ulitity/constants/Questions';
import every from 'lodash/every';

export const canReportTypes = [QuestionTypes.CHECKBOXES, QuestionTypes.DROPDOWN, QuestionTypes.MULTI_CHOICE];

export const updateFilter = (filter, newValue) => {
    let newFilter = {...filter};
    if (!newFilter[newValue.question]) {
      newFilter[newValue.question] = {};
    }
  
    if (!newValue.subOption) {
      newFilter[newValue.question][newValue.option] = newValue.value;
    } else {
      if (!newFilter[newValue.question][newValue.option]) {
        newFilter[newValue.question][newValue.option] = {
          [newValue.subOption]: newValue.value
        }
      }
    }
  
    return {
      type: actionTypes.SET_FILTER,
      payload: newFilter
    };
};

export const hasFilterMap = (state) => {
    let reportFilter = state.reportFilter;
    let hasFilterMap = {};
    Object.keys(reportFilter).forEach(questionId => {
      // let answer = reportFilter[questionId];
      // let hasFilter = Object.keys(answer).some(answerId => {
      //   if (typeof answer[answerId] === 'boolean') {
      //     return answer[answerId];
      //   } else if (typeof answer[answerId] === 'object') {
      //     return Object.keys(answer[answerId]).some(k => answer[answerId][k]);
      //   }
      // });
      let hasFilter = null;
      hasFilterMap[questionId] = hasFilter;
    });
    return hasFilterMap;
  };
  
  export const resultsToReport = (state) => {
    let { survey, results, reportFilter } = state;
  
    if (!survey || !survey.questions) {
      return {
        reportResult: [],
        results: []
      };
    }
  
    let filterMap = hasFilterMap(state);
  
    let filtedResults = results.filter(result => {
      return every(Object.keys(result.result), questionId => {
        if (!filterMap[questionId]) return true;
  
        let answer = result.result[questionId];
        if (typeof answer === 'string') {
          console.log('ANSWER');
          console.log(answer);
          console.log(reportFilter[questionId][answer]);
          return reportFilter[questionId][answer];
        } else if (typeof answer === 'object') {
          return Object.keys(answer).some(subKey => reportFilter[questionId][subKey]);
        } else {
          return true;
        }
      });
    });
  
    let reportResult = survey.questions
        .filter(q => canReportTypes.indexOf(q.type) !== -1)
        .map(question => {
          let id = question._id;
          let optionMap = {};
          question.options.forEach(o => {
            optionMap[o._id] = {
              content: o.content,
              count: 0
            };
          });
          filtedResults.forEach(result => {
            let questionAnswer = result.result[id];
            if (typeof questionAnswer === 'string') {
              optionMap[questionAnswer].count++;
            } else if (typeof questionAnswer === 'object') {
              Object.keys(questionAnswer).forEach(answer => questionAnswer[answer] && optionMap[answer].count++);
            }
          });
          return {
            _id: id,
            title: question.title,
            stats: Object.keys(optionMap).map(key => {
              return {
                name: optionMap[key].content,
                value: optionMap[key].count
              };
            })
          };
        });
  
    return {
      reportResult,
      results: filtedResults
    };
};