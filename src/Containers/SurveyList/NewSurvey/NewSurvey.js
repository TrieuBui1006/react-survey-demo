import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import newId from '../../../ulitity/idGenerator';
import axios from '../../../axios-order';

import * as actionTypes from '../../../Store/actions/actionsTypes';
import NewSurveyView from '../../../Components/NewSurvey/NewSurvey';

class NewSurvey extends Component {
    state = {
        _id: '',
        creatorDate: '',
        lastModified: '',
        userId: '',
        content: {
            title: 'Your Survey Title',
            subTitle: '',
            question: {},
            question_order: []
        }
    }
    componentDidMount() {
        this.setState({
            _id: newId(),
            creatorDate: new Date(),
            lastModified: new Date(),
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
            // .then(this.props.history.push('/user/' + this.props.surveyId + '/overview')) 
        // axios.delete('/surveys/-Lg_jJKP2VhSsF8xC3Kl/content.json')
        //     .then(response => {
        //         console.log(response.data);
        //     })
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