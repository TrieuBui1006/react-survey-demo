import EditQuestionPanelView from '../../Components/EditPanel/EditQuestionPanel';
import { connect } from 'react-redux';
import { updateQuestion } from '../../Store/actions/surveyEditer';
import { getActiveQuestion } from '../../Store/reducers/getActiveQuestion';

const mapStateToProps = (state) => {
  return {
    question: getActiveQuestion(state.surveyEditer)
  };
};

const mapDispatchToProps = {
  updateQuestion
};

const EditQuestionPanel = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditQuestionPanelView);

export default EditQuestionPanel;
