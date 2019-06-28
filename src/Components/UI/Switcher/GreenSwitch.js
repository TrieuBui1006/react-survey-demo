import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {withStyles} from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';

const GreenSwitch = withStyles({
    switchBase: {
      color: lightGreen['A400'],
      '&$checked': {
        color: lightGreen['A700'],
      },
      '&$checked + $track': {
        backgroundColor: lightGreen['A700'],
      },
    },
    checked: {},
    track: {},
})(Switch);

const GreenSwitcher = (props) => {
    return (
        <FormControlLabel
            control={
            <GreenSwitch
                checked={props.checked}
                onChange={props.onChange}
            />
            }
            label={props.label}
        />
    )
}

export default GreenSwitcher;
