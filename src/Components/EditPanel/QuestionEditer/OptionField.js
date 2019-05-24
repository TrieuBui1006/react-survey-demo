import React, {Component} from 'react';
import {FaPlus, FaMinus} from 'react-icons/fa';

class OptionField extends Component {
    render() {
        const { content, onRemove, onClone, onChange, canRemove } = this.props;
        return (
            <div>
                <input
                    type="text"
                    value={content}
                    onChange={onChange}/>
                <div>
                    <button 
                        type="button"
                        onClick={onClone}><FaPlus /></button>
                    {canRemove ? <button 
                        type="button" 
                        onClick={onRemove}><FaMinus /></button> : ''}
                </div>
            </div>
        );
    }
}

export default OptionField;