import React, {Component} from 'react';
import {withFormik} from 'formik';

import QuestionWrapper from './QuestionWrapper';
import Button from '@material-ui/core/Button';
import Spinner from '../UI/Spinner/Spinner';

import classes from './Survey.module.css';

class Survey extends Component {
    render () {
        const { survey, isLoading, handleSubmit } = this.props;
        const { title, subTitle, questions } = survey;

        let surveyForm = <Spinner />
        if(!isLoading) {
            surveyForm = (
                <form onSubmit={handleSubmit}>
                    <header>
                        <h2 className={classes.Title}>{title}</h2>
                        <p>{subTitle}</p>
                    </header>
                    <ul>
                        {questions.map(question => {
                            return <li key={question._id}><QuestionWrapper question={question}/></li>
                        })}
                    </ul>
                    <div>
                        <Button
                            variant="contained" 
                            type="submit"
                            color="primary" 
                            size="large" >SUBMIT</Button>
                    </div>
                </form>
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
        props.onSubmit(props.survey.id, values)
    }})(Survey);
