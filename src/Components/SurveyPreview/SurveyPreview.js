import React, {Component} from 'react';

import SurveyHeader from './SurveyHeader';

class SurveyPreview extends Component {
    render () {
        let {survey, onHeaderActive } = this.props
        return (
            <div>
                <form>
                    <SurveyHeader
                        title={survey.title}
                        subTitle={survey.subTitle} 
                        onActive={onHeaderActive}/>
                    {this.props.children}
                </form>
            </div>
        );
    }
    
};

export default SurveyPreview;