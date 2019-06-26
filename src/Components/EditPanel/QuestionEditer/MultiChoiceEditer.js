import React, {Component} from 'react';
import PropsTypes from 'prop-types';

import OptionField from './OptionField';
import newId from '../../../ulitity/idGenerator';


class MultichoiceEditer extends Component {
    constructor(props) {
        super(props);
        this.inputs = {};
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