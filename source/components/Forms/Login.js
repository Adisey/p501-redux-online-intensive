// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';
import { login } from '../../bus/forms/shapes';

// Actions
import { loginActions } from '../../bus/login/actions';

const mapStateToProps = (state) => {
    console.log(`state (Login) ->`, state);
    return {
        isFetching: state.ui.get('isFetching'),
    };
};
const mapDispathToProps = {
    loginAsync: loginActions.loginAsync,
};

@connect(mapStateToProps, mapDispathToProps)
export default class LoginForm extends Component {
    // static defaultProps = {
    //     // State
    //     isFetching: false,
    //
    //     // Actions
    //     loginAsync: () => {},
    // };
    //
    _submitLoginForm = (user) => {
        console.log(`user ->`, user);
        this.props.loginAsync(user);
    };

    render () {
        const { isFetching } = this.props;

        console.log(`isFetching (Login) ->`, isFetching);
        console.log(`this.props (Login) ->`, this.props);
        console.log(`login.shape ->`, login.shape);

        return (
            <Formik
                initialValues = { login.shape }
                render = { (props) => {
                    const { isValid, touched, errors } = props;

                    const centeredWrapperStyle = cx(Styles.wrapper, Styles.centered, {
                        [Styles.disabledInput]: isFetching,
                    });
                    const emailStyle = cx({
                        [Styles.invalidInput]: !isValid && touched.email && errors.email,
                    });
                    const passwordStyle = cx({
                        [Styles.invalidInput]: !isValid && touched.password && errors.password,
                    });
                    const buttonStyle = cx(Styles.loginSubmit, {
                        [Styles.disabledButton]: isFetching,
                    });
                    const buttonMessage = isFetching ? 'Загрузка...' : 'Войти';

                    return (
                        <Form className = { Styles.form }>
                            <div className = { centeredWrapperStyle }>
                                <div>
                                    <Field
                                        className = { emailStyle }
                                        disabled = { isFetching }
                                        name = 'email'
                                        placeholder = 'Почта'
                                        type = 'email'
                                    />
                                    <Field
                                        className = { passwordStyle }
                                        disabled = { isFetching }
                                        name = 'password'
                                        placeholder = 'Пароль'
                                        type = 'password'
                                    />
                                    <label className = { Styles.rememberMe }>
                                        <Field checked = { props.values.remember } name = 'remember' type = 'checkbox' />
                                        Запомнить меня
                                    </label>
                                    <button className = { buttonStyle } disabled = { isFetching } type = 'submit'>
                                        {buttonMessage}
                                    </button>
                                </div>
                            </div>
                        </Form>
                    );
                } }
                validationSchema = { login.schema }
                onSubmit = { this._submitLoginForm }
            />
        );
    }
}
