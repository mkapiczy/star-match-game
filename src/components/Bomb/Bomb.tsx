import React, {useEffect, useState} from 'react';
import './Bomb.css';
import bomb from '../../bomb.gif'

interface Props {
    onClick: any
}

const Bomb: React.FC<Props> = (props: Props) => {

    return (
        <div className='bomb-wrapper'>
            <img className={"bomb-image"} src={bomb} alt="loading...">
            </img>
            <div className="title-wrapper">
                <div className="game-over-title">Game Over!</div>
                <button className="bomb-play-again-button" onClick={props.onClick}>Play Again</button>
            </div>
        </div>
    );
}

export default Bomb;