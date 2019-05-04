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

        const game = this.props.games.map(game => <li><GameIndexItem key={game.id} game={game}/></li>)

        return (
            <div className="games-directory">

                <div className="fake-ad-container">

                    <div className="fake-advertisement">
                        <p>This is going to be a fake ad</p>        
                    </div>
                    
                </div>
                
                <ul className="game-index-list-items">{game}</ul>
            </div>
        );
    }
}

export default GamesIndex;