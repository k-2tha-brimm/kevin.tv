import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllStreams, selectAllGames } from '../../reducers/selector';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditForm from './edit_form';

const mapStateToProps = (state, ownProps) => {
    let streamer = state.entities.streamers[ownProps.match.params.userId];
    if(streamer){
        return {
            streamer,
            stream: selectAllStreams(state)[0],
            game: selectAllGames(state)[0]
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);