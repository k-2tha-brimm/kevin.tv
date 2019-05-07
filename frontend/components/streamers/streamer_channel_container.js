import { connect } from 'react-redux';
import { fetchOneStreamer } from '../../actions/users_actions';
import StreamerChannel from './streamer_channel';


const mapStateToProps = (state, ownProps) => {
    let streamer = state.entities.streamers[ownProps.match.params.userId];
    // debugger
    if(streamer){
        return {
            streamer,
        }
    }
}

// will need to pull followers and following once we have that table

const mapDispatchToProps = dispatch => {
    return {
        fetchOneStreamer: id => dispatch(fetchOneStreamer(id)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamerChannel);