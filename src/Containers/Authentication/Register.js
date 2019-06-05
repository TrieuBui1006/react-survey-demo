import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';

import classes from './Login.module.css';
import Input from '../../Components/UI/Input/Input';
import Button from '@material-ui/core/Button';
import Spinner from '../../Components/UI/Spinner/Spinner';

import {auth} from '../../Store/actions/authentication';
import {checkValidity} from '../../ulitity/ulitity';
class Login extends Component {
    state = {
        controls: {
            email: {
                elementLabel: 'Email Adress*',
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address*'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                validity: false,
                touched: false
            },
            userName: {
                elementLabel: 'User Name*',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'User Name*'
                },
                value: '',
                validation: {
                    required: true
                },
                validity: false,
                touched: false
            },
            password: {
                elementLabel: 'Password*',
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password*'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                validity: false,
                touched: false
            }
        },
        isSignup: true,
        formIsValid: false
    }

    // componentDidMount() {
    //     if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
    //         this.props.onSetAuthRedirectPath();
    //     }
    // }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                validity: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].validity && formIsValid;
        }
        this.setState({controls: updatedControls, formIsValid: formIsValid});
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }

    render() {
        const formElementArray = [];
        for (let key in this.state.controls) {
            formElementArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementArray.map(formElement => (
            <Input
                key={formElement.id}
                label={formElement.config.elementLabel}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value} 
                invalid ={!formElement.config.validity}
                shouldValidate ={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ));

        if(this.props.loading) {
            form = <Spinner />
        }

        let errorMessage = null;
        if(this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        let authRedirect = null;
        if(this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        return (
            <div className={classes.Login}>
                <h3>REGISTER</h3>
                {authRedirect}
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        size="large" 
                        disabled={!this.state.formIsValid}>SUBMIT</Button>
                </form>
                <br />
                <Link to="/login">
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large">Back To Login</Button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(auth(email, password, isSignup)),
        // onSetAuthRedirectPath: () => dispatch(setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);