import { connect } from 'react-redux';
import { fetchOneStreamer, fetchAllUsers } from '../../actions/users_actions';
import StreamerChannel from './streamer_channel';
import { selectAllStreams, selectAllGames } from '../../reducers/selector';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
    let streamer = state.entities.streamers[ownProps.match.params.userId];
    let settingsId = state.session.id
    if(streamer){
        return {
            streamer,
            stream: selectAllStreams(state)[0],
            game: selectAllGames(state)[0],
            settingsId
        }
    }
}

// will need to pull followers and following once we have that table

const mapDispatchToProps = dispatch => {
    return {
        fetchAllUsers: users => dispatch(fetchAllUsers(users)),
        fetchOneStreamer: id => dispatch(fetchOneStreamer(id)),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamerChannel);