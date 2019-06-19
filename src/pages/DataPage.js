import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import {fetchData} from '../Store/actions/data';
import Spinner from '../Components/UI/Spinner/Spinner';
import ResultTableContainer from '../Containers/Results/ResultTableContainer';
import ModalContainer from '../Containers/Results/ModalContainer';

class DataPage extends Component {
    componentDidMount() {
        this.props.onFetchData(this.props.surveyId, this.props.token);
    }

    // componentDidUpdate() {
    //     console.log(this.props.modalColumns);
    // }

    render() {

        if(this.props.isLoading) {
            return <Spinner />
        }

        return (
            <Fragment>
                <ResultTableContainer />
                <ModalContainer />
            </Fragment>
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
