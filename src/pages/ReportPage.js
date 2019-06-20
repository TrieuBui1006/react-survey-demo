import React, {Component} from 'react';
import {connect} from 'react-redux';

import ReportContainer from '../Containers/Report/ReportContainer';
import {fetchData} from '../Store/actions/data';
import Spinner from '../Components/UI/Spinner/Spinner';

class ReportPage extends Component {
    componentDidMount() {
        this.props.onFetchData(this.props.surveyId, this.props.token);
    }

    render() {
        if(this.props.isLoading) {
            return <Spinner />
        }

        return (
            <div>
                <ReportContainer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        surveyId: state.surveyEditer.survey.id,
        token: state.auth.token,
        isLoading: state.data.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchData: (surveyId, token) => dispatch(fetchData(surveyId, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportPage);
