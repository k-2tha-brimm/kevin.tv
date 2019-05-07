import { connect } from 'react-redux';
import { fetchOneUser } from '../../utils/users_util';
import StreamerChannel from './streamer_channel';


const mapStateToProps = (state, ownProps) => {
    let streamer = state.entities.streamers[ownProps.match.params.userId];
    if(streamer){
        return {
            streamer,
            stream: streamer.stream
        }
    }
}

// will need to pull followers and following once we have that table

const mapDispatchToProps = dispatch => {
    return {
        fetchOneUser: id => dispatch(fetchOneUser(id)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamerChannel);