import React from 'react';
import './Game.css';

import StarsDisplay from '../StarsDisplay/StarsDisplay';
import SelectedNumbersDisplay from '../SelectedNumbersDisplay/SelectedNumbersDisplay';
import NumbersDisplay from '../NumbersDisplay/NumbersDisplay'
import ApproveButton from '../ApproveButton/ApproveButton';
import RepeatDrawButton from '../RepeatDrawButton/RepeatDrawButton';

const Game: React.FC = () => {
    return (
        <div className="Game">
            <div className="first-row">
                <StarsDisplay/>
                <ApproveButton/>
                <RepeatDrawButton/>
                <SelectedNumbersDisplay/>
            </div>
            <div className="second-row">
                <NumbersDisplay/>
            </div>
        </div>
    );
}

export default Game;