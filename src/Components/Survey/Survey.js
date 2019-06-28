import React, {Component} from 'react';
import {withFormik} from 'formik';

import QuestionWrapper from './QuestionWrapper';
import Button from '@material-ui/core/Button';
import Spinner from '../UI/Spinner/Spinner';

import classes from './Survey.module.css';

class Survey extends Component {
    render () {
        const { survey, isLoading, handleSubmit, isSuccess, isError, AuthSubmit, isRequired} = this.props;
        const { title, subTitle, questions } = survey;

        let surveyForm = <Spinner />
        if(!isLoading) {
            surveyForm = (
                <form onSubmit={handleSubmit}>
                    {!AuthSubmit ? <div className={classes.Block}>This survey is no longer available for submission!</div> : null }
                    <header>
                        <p className={classes.Rules}>(*) Answer Requirements</p>
                        <h2 className={classes.Title}>{title}</h2>
                        <p>{subTitle}</p>
                    </header>
                    <ul>
                        {questions.map(question => {
                            return <li key={question._id}><QuestionWrapper question={question}/></li>
                        })}
                    </ul>
                    <div>
                        {isRequired ? <h4>You need to answer all required questions! (*)</h4> : null}
                        <Button
                            disabled={!AuthSubmit}
                            variant="contained" 
                            type="submit"
                            color="primary" 
                            size="large" >SUBMIT</Button>
                    </div>
                </form>
            )
        }
        if(isSuccess) {
            surveyForm = (
                <h3 className={classes.Success}>Submit Success !</h3>
            )
        }
        if(isError) {
            surveyForm = (
                <h3 className={classes.Error}> Network Error!</h3>
            )
        }

        return (
            <div className={classes.Survey}>
                {surveyForm}
            </div>
        )
    };
};

export default withFormik({
    mapPropsToValues: () => {}, 
    handleSubmit: (values, {props}) => {
        props.onSubmit(values, props.surveyId, props.question_required)
    }})(Survey);
