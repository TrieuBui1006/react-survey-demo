import React, {Component} from 'react';
import PropsTypes from 'prop-types';

import OptionField from './OptionField';
import newId from '../../../ulitity/idGenerator';
import GreenSwitcher from '../../UI/Switcher/GreenSwitch';
import classes from './Switcher.module.css';


class MultichoiceEditer extends Component {
    constructor(props) {
        super(props);
        this.inputs = {};
    }

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
            isRequired: !this.state.required
        }
        this.props.updateQuestion(this.props._id, value);
        this.setState(prevState => {
            return {required: !prevState.required}
        });
    }
    
    update() {
        this.props.updateQuestion(this.props._id, {
            title: this.title_node.value
        });
    }

    render () {
        const { _id, title, options } = this.props;
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
                        <label><b>Options</b></label>
                        {options.map((option, index) => {
                            return <OptionField
                                canRemove={index !== 0}
                                key={option._id}
                                content={option.content}
                                ref={(input) => { this.inputs[option._id] = input }}
                                onChange={(e) => {
                                this.props.updateQuestion(_id, {
                                    options: [
                                    ...options.slice(0, index),
                                    {
                                        _id: option._id,
                                        content: e.target.value
                                    },
                                    ...options.slice(index + 1)
                                    ]
                                })
                                }}
                                onClone={() => {
                                this.props.updateQuestion(_id, {
                                    options: [
                                    ...options.slice(0, index + 1),
                                    {_id: newId(), content: option.content},
                                    ...options.slice(index + 1)]
                                })
                                }}
                                onRemove={() => {
                                this.props.updateQuestion(_id, {
                                    options: [
                                    ...options.slice(0, index),
                                    ...options.slice(index + 1)]
                                })
                                }}/>
                        })}
                    </div>
                </form>
            </div>
        );
    }
}

MultichoiceEditer.PropsTypes = {
    _id: PropsTypes.string,
    title: PropsTypes.string,
    options: PropsTypes.array,
    updateQuestion: PropsTypes.func
};

export default MultichoiceEditer;