import React, {Component} from 'react';
import {connect} from 'react-redux';

import SurveyPreview from '../../Components/SurveyPreview/SurveyPreview';
import QuestionList from '../../Components/SurveyPreview/QuestionList';

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

export default connect(mapStateToProps)(SurveyPreviewContainer);