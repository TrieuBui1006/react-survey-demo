import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {assembleSurvey} from '../Store/actions/surveyEditer';
import {fetchUserSurvey, submitSurvey} from '../Store/actions/survey';

import Survey from '../Components/Survey/Survey';

class UserSurveyPage extends Component {
    componentDidMount() {
        this.props.onFetch(this.getSurveyId(this.props.match.url));
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.url !== prevProps.match.url) {
          this.props.onFetch(this.getSurveyId(this.props.match.url));
        }
    }
    
    getUserId = (url) => {
        return url.split('/')[2];
    }
    
    getSurveyId = (url) => {
        return url.split('/')[1];
    }

    render() {
        return <Survey 
            {...this.props}
            surveyId={this.getSurveyId(this.props.match.url)}/>
    }
}

const mapStatetoProps = state => {
    return {
        survey: assembleSurvey(state.survey.survey),
        isLoading: state.survey.isFetching || state.survey.isSubmitting,
        isSuccess: state.survey.isSuccess,
        isError: state.survey.error !== null,
        AuthSubmit : state.survey.survey.submitting
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: bindActionCreators(submitSurvey, dispatch),
        onFetch: (surveyId) => dispatch(fetchUserSurvey(surveyId)) 
    }
}



export default connect(mapStatetoProps, mapDispatchToProps)(UserSurveyPage);
