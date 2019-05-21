import {connect} from 'react-redux';

import QuestionListPanelView from '../../Components/EditPanel/QuestionListPanel';

import {addQuestion} from '../../Store/actions/surveyEditer';
import {QuestionDescriptions} from '../../ulitity/constants/Questions';

export default connect(() => {
    return {
      questions: QuestionDescriptions.map(q => {
        return {
          text: q.text,
          action: () => addQuestion(q.type)
        }
      })
    }
  })(QuestionListPanelView);