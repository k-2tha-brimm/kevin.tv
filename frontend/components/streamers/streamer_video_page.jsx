import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchOneStreamer } from '../../actions/users_actions';
import { selectAllVideos } from '../../reducers/selector';
import { closeModal } from '../../actions/modal_actions';

class StreamerVideo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            videoUrl: '',
            videoFile: null
        }
    }

    componentDidMount() {
        this.props.fetchOneStreamer(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.fetchOneStreamer(this.props.match.params.userId);
        }
      }

    handleFileSelect(e) {  
        const reader = new FileReader();

        const file = e.currentTarget.files[0];
        reader.onloadend = () => this.setState({ videoUrl: reader.result, videoFile: file });

        if (file) {
                reader.readAsDataURL(file);
            } else {
                this.setState({ videoUrl: "", videoFile: null });
            }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();

        formData.append('user[url]', this.state.imageUrl);
        
        if (this.state.imageUrl) {
            formData.append('user[avatar]', this.state.imageFile);
        }
        
        $.ajax({
          url: `/api/users/${this.props.user.id}/videos`,
          method: 'POST',
          data: formData,
          contentType: false,
          processData: false
        });
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
                    <div className="upload-video-right">
                        <input type="file" accept="video" id="file" className="inputfile"/>
                        <label htmlFor="file" >Upload a Video</label>
                        <input type="submit"/>
                    </div>
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


// one handles select, one handles submit


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
        fetchOneStreamer: id => dispatch(fetchOneStreamer(id)),
        closeModal: () => dispatch(closeModal())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(StreamerVideo);