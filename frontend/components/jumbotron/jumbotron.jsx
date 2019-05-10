import React from 'react';
import { connect } from 'react-redux';
import { fetchAllGames } from '../../actions/games_actions';
import { selectAllGames } from '../../reducers/selector';
import GameIndexItem from '../../components/games/games_index_item';

class Jumbotron extends React.Component {

    componentDidMount() {
        this.props.fetchAllGames()
    }

    render() {

        // var httpRequest = new XMLHttpRequest();
        // httpRequest.addEventListener('load', clipsLoaded);
        // httpRequest.open('GET', 'https://api.twitch.tv/kraken/clips/top?limit=10&game=Overwatch&trending=true');
        // httpRequest.setRequestHeader('Client-ID', 'spmus28uykcb190xqkv0abkh1uvwnc');
        // httpRequest.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
        // httpRequest.send();

        // function clipsLoaded() {
        //     var clipsDisplay = document.getElementById('featured-videos'),
        //         clipList = JSON.parse(httpRequest.responseText);
        
        //     clipList.clips.forEach(function(clip, index, array) {
        //         clipItem = document.createElement('div');
        //         clipItem.innerHTML = clip.embed_html;
        //         clipsDisplay.appendChild(clipItem);
        //     });
        // }

        const gamez = this.props.games.slice(0, 10).map(game => <li><GameIndexItem key={game.id} game={game} /></li>)

        return (

            <>
                <div className="jumbotron">
                    <iframe
                        src="https://clips.twitch.tv/embed?clip=IncredulousAbstemiousFennelImGlitch&autoplay=false"
                        height="700"
                        width="67%"
                        frameborder="0"
                        scrolling="no"
                        allowfullscreen="true">
                    </iframe>

                    <div className="featured-videos">
                        <h1>Featured Content</h1>
                        <ul className="game-index-list-items-scroll">{gamez}</ul>
                    </div>
                    
                </div>
                <div>
    
                </div>
            </>
        )
    }
}

const mstp = state => {
    return {
        games: selectAllGames(state)
    };
};

const mdtp = dispatch => {
    return {
        fetchAllGames: games => dispatch(fetchAllGames(games))
    };
};

export default connect(mstp, mdtp)(Jumbotron);