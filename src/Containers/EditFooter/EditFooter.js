import React, { Component } from 'react'
import {connect} from 'react-redux';

import EditFooterView from '../../Components/EditPanel/EditFooter';
import axios from '../../axios-order';

class EditFooter extends Component {
    submitSurvey = () => {
        const surveyData ={
            id: this.props.survey.id,
            title: this.props.survey.title,
            subTitle: this.props.survey.subTitle,
            question_order: this.props.survey.question_order,
            questions: this.props.survey.questions
        } 
        axios.post('/surveys.json', surveyData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }; 

    render() {
        return (
            <div>
                <EditFooterView clicked={this.submitSurvey}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        survey: state.surveyEditer.survey
    }
};

export default connect(mapStateToProps)(EditFooter, axios);
