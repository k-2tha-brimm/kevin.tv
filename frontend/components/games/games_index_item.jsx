import React from 'react';

const GameIndexItem = ({game}) => (
    <div className="index-item-information">
        <div className="game-photo">
            <p className="game-image-tag"><img src={game.photoUrl} alt="Cannot Display" height="221" width="166"/></p>
            <p className="game-title-tag">{game.title}</p>
        </div>
    </div>
);

export default GameIndexItem;