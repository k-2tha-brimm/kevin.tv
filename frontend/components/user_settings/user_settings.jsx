import React from 'react';
import { connect } from 'react-redux';


class UserSettings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="channel-description">
                <h1>Hello There!</h1>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = state => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);