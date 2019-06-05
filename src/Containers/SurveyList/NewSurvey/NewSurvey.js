import React, {Component} from 'react';
import {connect} from 'react-redux';
import newId from '../../../ulitity/idGenerator';
import axios from '../../../axios-order';

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
        axios.put('/surveys/' + this.state._id + '.json', newSurvey)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })

        // axios.delete('/surveys/-Lg_jJKP2VhSsF8xC3Kl/content.json')
        //     .then(response => {
        //         console.log(response.data);
        //     })
    };
    
    render() {
        return (
            <div>
                <NewSurveyView clicked={this.clickHandler} />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        user_Id: state.auth.userId
    }
}

export default connect(mapStateToProps)(NewSurvey);