import React, {Component} from 'react';

class TextEditer extends Component {
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
                <form>
                    <div>
                        <label><b>Field Label</b></label>
                        <input 
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