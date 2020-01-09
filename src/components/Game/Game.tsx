import React, {useState} from 'react';
import './Game.css';

import StarsDisplay from '../StarsDisplay/StarsDisplay';
import SelectedNumbersDisplay from '../SelectedNumbersDisplay/SelectedNumbersDisplay';
import NumbersDisplay from '../NumbersDisplay/NumbersDisplay'
import ApproveButton from '../ApproveButton/ApproveButton';
import RepeatDrawButton from '../RepeatDrawButton/RepeatDrawButton';

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const Game: React.FC = () => {
    const [roundNumber, setRoundNumber] = useState(1);
    const [numberOfStars, setNumberOfStars] = useState(random(1, 9))

    return (
        <div className="Game">
            <div className="first-row">
                <StarsDisplay roundNumber={roundNumber} numberOfStars={numberOfStars}/>
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