import React, {Component} from 'react';

class EditSurveyPanel extends Component {
    update = () => {
        this.props.onUpdate({
            title: this.title.value,
            subTitle: this.subTitle.value
        })
    }

    render () {
        let {title, subTitle} = this.props;
        return (
            <div>
                <div>
                    <label><b>Your Survey Title</b></label>
                    <input
                        type="text"
                        value={title}
                        ref={(input) => {this.title = input}} 
                        onChange={this.update.bind(this)} />
                </div>
                <div>
                    <label><b>Your Survey SubTitle</b></label>
                    <textarea
                        type="text"
                        value={subTitle}
                        ref={(input) => {this.subTitle = input}}
                        onChange={this.update.bind(this)} />
                </div>
            </div>
        );
    }
}

export default EditSurveyPanel;