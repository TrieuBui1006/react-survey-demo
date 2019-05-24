import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditSurveyPanelView from '../../Components/EditPanel/EditSurveyPanel';
import { updateSurveyHeader } from '../../Store/actions/surveyEditer';

const mapStateToProps = (state) => {
  return {
    title: state.surveyEditer.title,
    subTitle: state.surveyEditer.subTitle
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdate: bindActionCreators(updateSurveyHeader, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditSurveyPanelView);