import React, {Component} from 'react';
import {connect} from 'react-redux';

import SurveyItem from '../../Components/SurveyList/SurveyItem';
import Spinner from '../../Components/UI/Spinner/Spinner';
import {fetchSurveys} from '../../Store/actions/surveys';

class SurveyList extends Component {
    componentDidMount () {
        this.props.onFetchSurveys(this.props.token, this.props.userId);
    }

    render() {
        let surveyList = <Spinner />
        if(!this.props.loading) {
            surveyList = this.props.surveys.map(survey => (
                <SurveyItem 
                   key={survey._id}
                   title={survey.content.title}
                   creatorDate={survey.creatorDate}
                   lastModified={survey.lastModified} />
            ))
        }

        return (
            <div>
                {surveyList}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        surveys: state.surveys.surveys,
        loading: state.surveys.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchSurveys: (token, userId) => dispatch(fetchSurveys(token, userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyList);