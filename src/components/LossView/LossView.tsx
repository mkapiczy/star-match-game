import React from 'react';
import './LossView.scss';
import bomb from '../../assets/bomb.gif'

interface Props {
    onClick: any
}

const LossView: React.FC<Props> = (props: Props) => {

    return (
        <div className='bomb-wrapper'>
            <img className={"bomb-image"} src={bomb} alt="Bomb gif"/>
            <div className="title-wrapper">
                <div className="game-over-title">Game Over!</div>
                <button className="bomb-play-again-button" onClick={props.onClick}>Play Again</button>
            </div>
        </div>
    );
}

export default LossView;