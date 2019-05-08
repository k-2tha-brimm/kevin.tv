import { connect } from 'react-redux';
import { fetchOneStreamer } from '../../actions/users_actions';
import StreamerChannel from './streamer_channel';
import { selectAllStreams } from '../../reducers/selector';


const mapStateToProps = (state, ownProps) => {
    let streamer = state.entities.streamers[ownProps.match.params.userId];
    if(streamer){
        return {
            streamer,
            stream: selectAllStreams(state)[0]
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