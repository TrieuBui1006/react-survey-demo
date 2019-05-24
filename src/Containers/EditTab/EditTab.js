import React from 'react';
import { connect } from 'react-redux';
import EditTabView from '../../Components/EditPanel/EditTab';

import { switchTab } from '../../Store/actions/surveyEditer';
import tabTypes from '../../ulitity/constants/TabTypes';
import QuestionListPanel from '../QuestionListPanel/QuestionListPanel';
import EditQuestionPanel from '../EditQuestionPanel/EditQuestionPanel';
import EditSurveyPanel from '../EditSurveyPanel/EditSurveyPanel';

export default connect((state) => {
  return {
    activeTab: state.tab,
    tabs: [
      {
        type: tabTypes.QUESTIONS_TAB,
        text: 'Add Question',
        panel: <QuestionListPanel/>
      },
      {
        type: tabTypes.EDIT_QUESTION_TAB,
        text: 'Edit Question',
        panel: <EditQuestionPanel/>
      },
      {
        type: tabTypes.EDIT_SURVEY_TAB,
        text: 'Edit Survey',
        panel: <EditSurveyPanel/>
      }
    ]
  };
}, (dispatch) => {
  return {
    onUpdateTab: (tab) => dispatch(switchTab(tab))
  };
})(EditTabView);
