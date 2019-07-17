import React from 'react';
import GameIndexItem from './games_index_item';

class GamesIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllGames();
    }

    render() {

        const game = this.props.games.map(game => <li><GameIndexItem key={game.id} game={game} /></li>)

        return (
            <div className="game-index-item-container">
                <div className="fake-ad-container">
                    <div className="fake-advertisement">
                        <img src={window.totinosUrl}></img>
                    </div>
                </div>

                <div className="games-directory">
                    <ul className="game-index-list-items">{game}</ul>
                </div>
            </div>
        );
    }
}

export default GamesIndex;