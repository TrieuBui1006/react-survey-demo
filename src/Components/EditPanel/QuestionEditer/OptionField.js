import React, {Component} from 'react';
import PropsTypes from 'prop-types';

import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import classes from './Flex.module.css';

class OptionField extends Component {
    render() {
        const { content, onRemove, onClone, onChange, canRemove } = this.props;
        return (
            <div>
                <input
                    type="text"
                    value={content}
                    onChange={onChange}/>
                <div className={classes.Flex}>
                    <ButtonGroup
                        variant="contained"
                        size="small"
                        color="primary" >
                        <Button 
                            variant="contained"
                            size="small"
                            onClick={onClone}><Icon>add</Icon></Button>
                        {canRemove ? <Button 
                            variant="contained"
                            size="small" 
                            onClick={onRemove}><Icon>remove</Icon></Button> : ''}
                    </ButtonGroup>
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