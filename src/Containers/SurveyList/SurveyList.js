import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from '../../axios-order';
import * as actionTypes from '../../Store/actions/actionsTypes';

import SurveyItem from '../../Components/SurveyList/SurveyItem';
import Spinner from '../../Components/UI/Spinner/Spinner';
import {fetchSurveys} from '../../Store/actions/surveys';

class SurveyList extends Component {
    componentDidMount () {
        this.props.onFetchSurveys(this.props.token, this.props.userId);
    }

    deleteSurveyHandler = (surveyId) => {
        axios.delete('/surveys/' + surveyId + '.json?auth=' + this.props.token)
            .then(res => {
                    // console.log(res.data);
                    this.props.onFetchSurveys(this.props.token, this.props.userId)
                });
    }

    render() {
        let surveyList = <Spinner />
        if(!this.props.loading) {
            surveyList = this.props.surveys.map(survey => (
                <SurveyItem 
                   key={survey._id}
                   title={survey.content.title}
                   creatorDate={survey.content.creatorDate}
                   lastModified={survey.content.lastModified} 
                   open={() => this.props.onGetSurveyId(survey._id)}
                   delete={() => this.deleteSurveyHandler(survey._id)}
                   submitting={survey.content.submitting}
                   surveyId={survey._id} />
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
        onFetchSurveys: (token, userId) => dispatch(fetchSurveys(token, userId)),
        onGetSurveyId: (surveyId) => dispatch({type: actionTypes.GET_SURVEY_ID, surveyId: surveyId})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyList);