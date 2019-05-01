import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/login_form_container';
// import SignupFormContainer from '../components/session_form/signup_form_container';

const App = () => (
    <div>
        <h1>The React... IT LIVES...</h1>
        <LoginFormContainer />
    </div>
);

export default App;