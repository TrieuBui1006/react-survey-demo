import {connect} from 'react-redux';

import QuestionListMobileView from '../../Components/EditPanel/QuestionListMoblie';

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
  })(QuestionListMobileView);