import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import SurveyPreview from '../../Components/SurveyPreview/SurveyPreview';
import QuestionList from '../../Components/SurveyPreview/QuestionList';
import {activeQuestion} from '../../Store/actions/surveyEditer';

class SurveyPreviewContainer extends Component {
    componentDidMount() {
        console.log(this.props.survey);
    }

    componentDidUpdate() {
        console.log(this.props.survey);
    }

    render () {
        let { survey, ...rest} = this.props;
        return (
            <SurveyPreview {...this.props}>
                <QuestionList {...survey} {...rest}/>
            </SurveyPreview>
        );
    }
}

const mapStateToProps = state => {
    return {
        survey: state.surveyEditer.survey,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onHeaderActive: () => {
            dispatch(activeQuestion('header'));
          },
        onActive: bindActionCreators(activeQuestion, dispatch)
    }
}    
export default connect(mapStateToProps, mapDispatchToProps)(SurveyPreviewContainer);