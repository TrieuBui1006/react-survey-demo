import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../Store/actions/data';
import Spinner from '../Components/UI/Spinner/Spinner';

class DataPage extends Component {
    componentDidMount() {
        this.props.onFetchData(this.props.surveyId, this.props.token);
    }

    render() {

        if(this.props.isLoading) {
            return <Spinner />
        }

        return (
            <div>
                <h1>Under Development</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        surveyId: state.surveyEditer.survey.id,
        isLoading: state.data.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchData: (surveyId, token) => dispatch(fetchData(surveyId, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataPage);
