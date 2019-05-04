import React from 'react';
import { Link } from 'react-router-dom';

const GameIndexItem = ({game}) => (
    <div className="index-item-information">
        <div className="game-photo">
            <p className="game-image-tag"><Link to="/directory/game/" style={{color: "rgb(100, 65, 165)", textDecoration: 'none' }}><img className="game-photograph" src={game.photoUrl} alt="Cannot Display" height="221" width="175"/></Link></p>
            <p className="game-title-tag"><Link to="/directory/game/" style={{color: "rgb(100, 65, 165)", textDecoration: 'none' }}>{game.title}</Link></p>
        </div>
    </div>
);

export default GameIndexItem;