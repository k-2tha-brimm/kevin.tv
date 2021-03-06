import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Link, Route } from 'react-router-dom';
import App from './app';
// import LoginFormContainer from '../components/session_form/login_form_container';
// import SignupFormContainer from '../components/session_form/signup_form_container';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
)

export default Root;