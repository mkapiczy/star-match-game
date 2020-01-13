import React from 'react';
import './StartGameButton.css';

interface Props {
    onClick: any;
}
const StartGameButton: React.FC<Props> = (props:Props) => {
    return (
        <div className="start-game-wrapper">
            <button className="start-game-button" onClick={props.onClick}>Start Game</button>
        </div>
    )
}


export default StartGameButton;