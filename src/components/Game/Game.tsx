import React, {useEffect, useState} from 'react';
import './Game.css';
import _ from 'lodash'
import {randomSum} from "../../services/math-utils";
import FirstGameRow from "../FirstGameRow/FirstGameRow";
import SecondGameRow from "../SecondGameRow/SecondGameRow";
import ThirdGameRow from "../ThirdGameRow/ThirdGameRow";
import {GameState} from "../../services/CommonTypes";

const Game: React.FC = () => {
    const MAX_NUMBER_OF_STARS = 9;
    const MAX_NUMBER_OF_RETRIES = 5;
    const GAME_TIME = 10
    const TIMER_GAIN = 2
    const [roundNumber, setRoundNumber] = useState(1);
    const [availableNumbers, setAvailableNumbers] = useState(Array.from(Array(9), (_, i) => i + 1))
    const [numberOfStars, setNumberOfStars] = useState<number>(randomSum(availableNumbers, MAX_NUMBER_OF_STARS))
    const [selectedNumbers, setSelectedNumbers] = useState<Array<number>>([])
    const [numberOfUsedRetries, setNumberOfRetries] = useState<number>(0);
    const [gameState, setGameState] = useState<GameState>(GameState.NOT_INITIALIZED)
    const [timer, setTimer] = useState<number>(GAME_TIME)

    useEffect(() => {
        if (gameState === GameState.IN_PROGRESS) {
            computeGameState()
            const timerId = setTimeout(() => {
                decrementTimer()
            }, 1000)
            return () => clearTimeout(timerId);
        }
    })


    const decrementTimer = () => {
        if (timer >= 1) {
            setTimer(timer - 1)
        } else {
            setGameState(GameState.LOST)
        }
    }

    const approveSelectedNumbers = () => {
        if (areSelectedNumbersCorrect()) {
            setSelectedNumbers([])
            setNumberOfStars(randomSum(availableNumbers, MAX_NUMBER_OF_STARS))
            setRoundNumber(roundNumber + 1)
            setTimer(timer + TIMER_GAIN)
        }
    }

    const retryDraw = () => {
        if (areRetriesEnabled()) {
            setNumberOfStars(randomSum(availableNumbers, MAX_NUMBER_OF_STARS))
            setNumberOfRetries(numberOfUsedRetries + 1)
        }
    }

    const computeGameState = () => {
        if (!availableNumbers.length && !selectedNumbers.length) {
            setGameState(GameState.WON)
        } else if (numberOfUsedRetries === MAX_NUMBER_OF_RETRIES && !availableNumbers.length && selectedNumbers.reduce((a, b) => a + b, 0) !== numberOfStars) {
            setGameState(GameState.LOST)
        }
    }

    const areRetriesEnabled = () => numberOfUsedRetries < MAX_NUMBER_OF_RETRIES

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

    const restartGame = () => {
        setRoundNumber(1)
        setAvailableNumbers(Array.from(Array(9), (_, i) => i + 1))
        setNumberOfStars(randomSum(availableNumbers, MAX_NUMBER_OF_STARS))
        setSelectedNumbers([])
        setNumberOfRetries(0)
        setGameState(GameState.IN_PROGRESS)
        setTimer(GAME_TIME)
    }

    return (
        <div className="Game">
            <div className="first-row">
                <FirstGameRow roundNumber={roundNumber} numberOfStars={numberOfStars} restartGame={restartGame}
                              approveSelectedNumbers={approveSelectedNumbers} retryDraw={retryDraw} unselectNumber={unselectNumber}
                              selectedNumbers={selectedNumbers} gameState={gameState}
                              areSelectedNumbersCorrect={areSelectedNumbersCorrect()} areRetriesEnabled={areRetriesEnabled()}
                              availableNumberOfRetries={MAX_NUMBER_OF_RETRIES - numberOfUsedRetries}/>
            </div>
            <div className="second-row">
                <SecondGameRow numbersCount={MAX_NUMBER_OF_STARS} availableNumbers={availableNumbers} selectNumber={selectNumber}/>
            </div>
            <div className="third-row">
                <ThirdGameRow gameState={gameState} timerCount={timer} restartGame={restartGame}/>
            </div>
        </div>
    );
}

export default Game;