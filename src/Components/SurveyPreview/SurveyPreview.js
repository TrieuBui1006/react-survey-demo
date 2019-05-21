import React, {Component} from 'react';

import SurveyHeader from './SurveyHeader';

class SurveyPreview extends Component {
    render () {
        let {survey} = this.props
        return (
            <div>
                <form>
                    <SurveyHeader
                        title={survey.title}
                        subTitle={survey.subTitle} />
                    {this.props.children}
                </form>
            </div>
        );
    }
    
};

export default SurveyPreview;