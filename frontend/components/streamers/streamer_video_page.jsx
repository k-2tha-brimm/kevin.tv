import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchOneStreamer } from '../../actions/users_actions';
import { selectAllVideos } from '../../reducers/selector';

class StreamerVideo extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchOneStreamer(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.fetchOneStreamer(this.props.match.params.userId);
        }
      }

    render() {

        const {streamer, videos} = this.props;

        if(!streamer) {
            return null;
        }

        let videoz = videos.map(video =>
                                <li>{video.title}</li>);

        return (
            <>
            <div className="channel-header-container">
                <div className="user-information-top-bar">
                    <ul>
                        <li className="streamer-username"><Link to={`/channel/${streamer.id}`} streamer={streamer}>{streamer.username}</Link></li>
                        <li className="streamers-videos"><Link to={`/channel/${streamer.id}/videos`} streamer={streamer}>Videos</Link></li>
                        <li className="channel-followers">Followers</li>
                        <ul className="channel-following">
                            <li>Following</li>
                            <button className="login-button"> Follow</button>
                        </ul>
                    </ul>
                </div>
                <div className="chat-box">
                    <div className="chat-box-top">
                        <p>Stream Chat</p>
                    </div>
                </div>
            </div>
            <div className="video-index">

                <div className="video-index-header">
                    <h2>Showing Featured Videos</h2>
                </div>

                <div className="video-list-items">
                    <ul>
                        {videoz}
                    </ul>
                </div>
            </div>
        </>
        )
    }
}





const mapStateToProps = (state, ownProps) => {
    let streamer = state.entities.streamers[ownProps.match.params.userId];
    if(streamer){
        return {
            streamer,
            videos: selectAllVideos(state)
        }
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchOneStreamer: id => dispatch(fetchOneStreamer(id))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(StreamerVideo);