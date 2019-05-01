import React from 'react';
import { signup } from '../../actions/session_action';
import { connect } from 'react-redux';
import SessionForm from '../session_form/session_form';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        formType: 'Sign Up',
        greeting: 'Join kevin.tv today',
        errors: state.errors.session,
        alternativeAction: <Link to="/login">Log In</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        action: user => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);