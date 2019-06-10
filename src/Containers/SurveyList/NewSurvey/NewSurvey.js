import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import newId from '../../../ulitity/idGenerator';
import axios from '../../../axios-order';

import * as actionTypes from '../../../Store/actions/actionsTypes';
import NewSurveyView from '../../../Components/NewSurvey/NewSurvey';
import {InitQuestions} from '../../../ulitity/constants/Questions';

class NewSurvey extends Component {
    state = {
        _id: '',
        userId: '',
        content: {
            title: 'Your Survey Title',
            subTitle: '',
            creatorDate: '',
            lastModified: '',
        }
    }
    componentDidMount() {
        const sampleQuestion = InitQuestions['SINGLE_LINE_TEXT']();
        const questionObj = {
            [sampleQuestion._id]: sampleQuestion
        }
        let questions = [sampleQuestion._id];
        const orderQuestions = questions.map(questionId => questionObj[questionId]);
        const content = {
            title: 'Your Survey Title',
            subTitle: '',
            creatorDate: new Date(),
            lastModified: new Date(),
            questions: [...orderQuestions]
        }

        this.setState({
            _id: newId(),
            content: content,
            userId: this.props.user_Id
        })
    }

    clickHandler = () => {
        const newSurvey = {...this.state};
        axios.put('/surveys/' + this.state._id + '.json?auth=' + this.props.token, newSurvey)
            .then(res => {
                this.props.onGetSurveyId(res.data._id);
            })
            .catch(error => {
                console.log(error);
            })
    };
    
    render() {
        return (
            <div>
                <NewSurveyView 
                    clicked={this.clickHandler}
                    isLoading={this.props.loading}
                    error={this.props.isError} />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        user_Id: state.auth.userId,
        token: state.auth.token,
        surveyId: state.surveyEditer.survey.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetSurveyId: (surveyId) => dispatch({type: actionTypes.GET_SURVEY_ID, surveyId: surveyId})
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewSurvey));