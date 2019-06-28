import React, {Component} from 'react';
import PropsTypes from 'prop-types';

import Icon from '@material-ui/core/Icon';
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
                        onClick={onClone}><Icon>add</Icon></Button>
                    {canRemove ? <Button 
                        variant="contained"
                        color="secondary"
                        size="medium" 
                        onClick={onRemove}><Icon>remove</Icon></Button> : ''}
                </div>
            </div>
        );
    }
}

OptionField.PropsTypes = {
    content: PropsTypes.string,
    onRemove: PropsTypes.func,
    onClone: PropsTypes.func,
    onChange: PropsTypes.func,
    canRemove: PropsTypes.bool
}

export default OptionField;