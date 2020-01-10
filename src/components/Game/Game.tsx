import React, {useEffect, useState} from 'react';
import './Game.css';

import StarsDisplay from '../StarsDisplay/StarsDisplay';
import SelectedNumbersDisplay from '../SelectedNumbersDisplay/SelectedNumbersDisplay';
import ButtonArea from '../ButtonArea/ButtonArea';
import CircularButton from '../CircularButton/CircularButton';
import {faCheck, faReply} from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash'
import NumbersDisplay from '../NumbersDisplay/NumbersDisplay';
import CornerCircularLabel from '../CornerCircularLabel/CornerCurcularLabel';
import {Corner} from "../../CommonTypes";

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const randomSumIn = (arr: Array<number>, max: number): number => {
    const sets: Array<Array<number>> = [[]];
    const sums: Array<number> = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0, len = sets.length; j < len; j++) {
            const candidateSet = sets[j].concat(arr[i]);
            const candidateSum = candidateSet.reduce((a: number, b: number) => a + b, 0)
            if (candidateSum <= max) {
                sets.push(candidateSet);
                sums.push(candidateSum);
            }
        }
    }
    return random(1, max);
}

enum GameState {
    WON,
    LOST,
    IN_PROGRESS
}

const Game: React.FC = () => {
    const maxNumberOfStars = 9;
    const maxNumberOfRetries = 5;
    const [roundNumber, setRoundNumber] = useState(1);
    const [availableNumbers, setAvailableNumbers] = useState(Array.from(Array(9), (_, i) => i + 1))
    const [numberOfStars, setNumberOfStars] = useState<number>(randomSumIn(availableNumbers, maxNumberOfStars))
    const [selectedNumbers, setSelectedNumbers] = useState<Array<number>>([])
    const [numberOfRetries, setNumberOfRetries] = useState<number>(0);
    const [gameState, setGameState] = useState<GameState>(GameState.IN_PROGRESS)

    useEffect(() => {
        if (gameState === GameState.IN_PROGRESS) {
            computeGameState()
        }
    })

    const approveSelectedNumbers = () => {
        if (areSelectedNumbersCorrect()) {
            setSelectedNumbers([])
            setNumberOfStars(randomSumIn(availableNumbers, maxNumberOfStars))
            setRoundNumber(roundNumber + 1)
        }
    }

    const retryDraw = () => {
        if (areRetriesEnabled()) {
            setNumberOfStars(randomSumIn(availableNumbers, maxNumberOfStars))
            setNumberOfRetries(numberOfRetries + 1)
        }
    }

    const computeGameState = () => {
        if (!availableNumbers.length && !selectedNumbers.length) {
            setGameState(GameState.WON)
            window.alert("You won!");
        } else if (!areRetriesEnabled() && !areSelectedNumbersCorrect()) {
            setGameState(GameState.LOST)
            window.alert("You lost!")
        }
    }

    const areRetriesEnabled = () => numberOfRetries < maxNumberOfRetries

    const areSelectedNumbersCorrect = () => {
        const sumOfSelectedNumbers = selectedNumbers.reduce((a, b) => a + b, 0)
        return sumOfSelectedNumbers === numberOfStars;
    }

    const selectNumber = (selectedNumber: number) => {
        setSelectedNumbers(_.uniq([...selectedNumbers, selectedNumber]))
        setAvailableNumbers(_.filter(availableNumbers, (n) => ![...selectedNumbers, selectedNumber].includes(n)));
    }

    const unselectNumber = (selectedNumber: number) => {
        const newSelected = _.reject(selectedNumbers, (n) => n === selectedNumber)
        setSelectedNumbers(newSelected);
        setAvailableNumbers([...availableNumbers, selectedNumber]);
    }
    return (
        <div className="Game">
            <div className="first-row">
                <StarsDisplay roundNumber={roundNumber} numberOfStars={numberOfStars}/>
                <ButtonArea>
                    <CircularButton icon={faCheck} isBlocked={!areSelectedNumbersCorrect()}
                                    onClick={approveSelectedNumbers}/>
                </ButtonArea>
                <ButtonArea>
                    <CircularButton icon={faReply} isBlocked={!areRetriesEnabled()} onClick={retryDraw}>
                        <CornerCircularLabel value={maxNumberOfRetries - numberOfRetries} corner={Corner.TOP_RIGHT}/>
                    </CircularButton>
                </ButtonArea>
                < SelectedNumbersDisplay
                    selectedNumbers={selectedNumbers}
                    onNumberClick={unselectNumber}
                />
            </div>
            <div className="second-row">
                <NumbersDisplay availableNumbers={availableNumbers} onNumberClick={selectNumber}/>
            </div>
        </div>
    );
}

export default Game;