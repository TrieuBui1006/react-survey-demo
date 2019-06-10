import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditSurveyPanelView from '../../Components/EditPanel/EditSurveyPanel';
import { updateSurveyHeader } from '../../Store/actions/surveyEditer';

const mapStateToProps = (state) => {
  return {
    title: state.surveyEditer.survey.title,
    subTitle: state.surveyEditer.survey.subTitle
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdate: bindActionCreators(updateSurveyHeader, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditSurveyPanelView);