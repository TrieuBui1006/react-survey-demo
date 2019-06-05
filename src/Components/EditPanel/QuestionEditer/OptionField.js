import React, {Component} from 'react';
import {FaPlus, FaMinus} from 'react-icons/fa';

import Button from '@material-ui/core/Button';

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
                    <Button 
                        variant="contained"
                        size="medium"
                        onClick={onClone}><FaPlus /></Button>
                    {canRemove ? <Button 
                        variant="contained"
                        color="secondary"
                        size="medium" 
                        onClick={onRemove}><FaMinus /></Button> : ''}
                </div>
            </div>
        );
    }
}

export default OptionField;