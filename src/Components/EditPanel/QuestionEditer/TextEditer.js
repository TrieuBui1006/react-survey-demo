import React, {Component} from 'react';

import GreenSwitcher from '../../UI/Switcher/GreenSwitch';
import classes from './Switcher.module.css';

class TextEditer extends Component {
    state={
        required: false
    }

    componentDidMount() {
        this.setState({required: this.props.isRequired})
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props._id !== prevProps._id) {
            this.setState({required: this.props.isRequired})
        }
    }

    toggleRequire = () => {
        const value ={
            title: this.title_node.value,
            placeholder: this.placeholder_node.value,
            isRequired: !this.state.required
        }
        this.props.updateQuestion(this.props._id, value);
        this.setState(prevState => {
            return {required: !prevState.required}
        });
    }

    update = () => {
        const value = {
            title: this.title_node.value,
            placeholder: this.placeholder_node.value
        };
        this.props.updateQuestion(this.props._id, value);
    }

    render () {
        const {title, placeholder} = this.props;
        return (
            <div>
                <div className={classes.Switcher}>
                    <GreenSwitcher 
                        checked={this.state.required}
                        onChange={() => this.toggleRequire()}
                        label="Is Required" />
                </div>
                <form>
                    <div>
                        <label><b>Field Label</b></label>
                        <textarea 
                            type="text"
                            value={title}
                            ref={node => {this.title_node = node}} 
                            onChange={() => this.update()} />
                    </div>
                    <div>
                        <label><b>Placeholder</b></label>
                        <input
                            type="text"
                            value={placeholder}
                            ref={node => {this.placeholder_node = node}}
                            onChange={() => this.update()} />
                    </div>
                </form>
            </div>
        );
    }
}

export default TextEditer;