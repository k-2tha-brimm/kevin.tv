import React from 'react';
import { connect } from 'react-redux';
import { fetchOneUser } from '../../actions/users_actions';


class UserSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props;
    }

    componentDidMount() {
        this.props.fetchOneUser(this.props.match.params.userId)
    }

    render() {
        return (
            <div className="channel-description">
                <h1>Hello There!</h1>
            </div>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    const user = state.entities.users[ownProps.match.params.userId]
    return {
        user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchOneUser: id => dispatch(fetchOneUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);