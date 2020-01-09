import React, {useState} from 'react';
import './Game.css';

import StarsDisplay from '../StarsDisplay/StarsDisplay';
import SelectedNumbersDisplay from '../SelectedNumbersDisplay/SelectedNumbersDisplay';
import NumbersDisplay from '../NumbersDisplay/NumbersDisplay'
import CircularButton from '../CircularButton/CircularButton';
import {faCheck, faReply} from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash'

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const Game: React.FC = () => {
    const [roundNumber, setRoundNumber] = useState(1);
    const [numberOfStars, setNumberOfStars] = useState(random(1, 9))
    const [availableNumbers, setAvailableNumbers] = useState([1,2,3,4,5,6,7,8,9])

    const selectNumber = (selectedNumber: number) => {
        setAvailableNumbers(_.reject(availableNumbers, (number) => number===selectedNumber));
    }
    return (
        <div className="Game">
            <div className="first-row">
                <StarsDisplay roundNumber={roundNumber} numberOfStars={numberOfStars}/>
                <CircularButton icon={faCheck} onClick={() => console.log('Approve choice')}/>
                <CircularButton icon={faReply} onClick={() => console.log('Repeat draw')}/>
                <SelectedNumbersDisplay/>
            </div>
            <div className="second-row">
                <NumbersDisplay availableNumbers={availableNumbers} onNumberClick={selectNumber}/>
            </div>
        </div>
    );
}

export default Game;