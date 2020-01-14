import React from 'react';
import './VictoryView.css';

interface Props {
    onClick: any
}
const VictoryView: React.FC<Props> = (props: Props) => {
    return (
        <div className='wrapper'>
            <div className="title-wrapper">
                <div className="you-won-title">You Won!</div>
                <button className="trophy-play-again-button" onClick={props.onClick}>Play Again</button>
            </div>
            <div className='glow'></div>
            <div className='mask'>
                <div className='container'>
                    <div className='trophy-star'>&#10022;</div>
                    <div className='main'></div>
                    <div className='stem1'></div>
                    <div className='stemCrease'></div>
                    <div className='stem2'></div>
                    <div className='base'></div>
                    <div className='arms'></div>
                </div>
            </div>
        </div>
    );
}

export default VictoryView;