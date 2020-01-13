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
import Trophy from "../Trophy/Trophy";
import Bomb from "../Bomb/Bomb";
import Timer from "../Timer/Timer"
import StartGameButton from "../StartGameButton/StartGameButton";
import {randomSum} from "../../services/math-utils";


enum GameState {
    WON,
    LOST,
    IN_PROGRESS,
    STOPPED
}

const Game: React.FC = () => {
    const MAX_NUMBER_OF_STARS = 9;
    const MAX_NUMBER_OF_RETRIES = 5;
    const GAME_TIME = 10
    const TIMER_GAIN = 2
    const [roundNumber, setRoundNumber] = useState(1);
    const [availableNumbers, setAvailableNumbers] = useState(Array.from(Array(9), (_, i) => i + 1))
    const [numberOfStars, setNumberOfStars] = useState<number>(randomSum(availableNumbers, MAX_NUMBER_OF_STARS))
    const [selectedNumbers, setSelectedNumbers] = useState<Array<number>>([])
    const [numberOfRetries, setNumberOfRetries] = useState<number>(0);
    const [gameState, setGameState] = useState<GameState>(GameState.STOPPED)
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
            setNumberOfRetries(numberOfRetries + 1)
        }
    }

    const computeGameState = () => {
        if (!availableNumbers.length && !selectedNumbers.length) {
            setGameState(GameState.WON)
        } else if (numberOfRetries === MAX_NUMBER_OF_RETRIES && !availableNumbers.length && selectedNumbers.reduce((a, b) => a + b, 0) !== numberOfStars) {
            setGameState(GameState.LOST)
        }
    }

    const areRetriesEnabled = () => numberOfRetries < MAX_NUMBER_OF_RETRIES

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
                <StarsDisplay roundNumber={roundNumber} numberOfStars={numberOfStars}/>
                {gameState === GameState.STOPPED ?
                    <StartGameButton onClick={restartGame}/> :
                    <>
                        <ButtonArea>
                            <CircularButton icon={faCheck} isBlocked={!areSelectedNumbersCorrect()}
                                            onClick={approveSelectedNumbers}/>
                        </ButtonArea>
                        <ButtonArea>
                            <CircularButton icon={faReply} isBlocked={!areRetriesEnabled()} onClick={retryDraw}>
                                <CornerCircularLabel value={MAX_NUMBER_OF_RETRIES - numberOfRetries}
                                                     corner={Corner.TOP_RIGHT}/>
                            </CircularButton>
                        </ButtonArea>
                    </>
                }
                < SelectedNumbersDisplay
                    selectedNumbers={selectedNumbers}
                    onNumberClick={unselectNumber}
                />
            </div>
            <div className="second-row">
                <NumbersDisplay availableNumbers={availableNumbers} onNumberClick={selectNumber}/>
            </div>
            <div className="third-row">
                <div>
                    {gameState !== GameState.STOPPED ? gameState === GameState.IN_PROGRESS ?
                        <Timer timer={timer}/> :
                        gameState === GameState.WON ? <Trophy onClick={restartGame}/> :
                            <Bomb onClick={restartGame}/> : ''}
                </div>
            </div>
        </div>
    );
}

export default Game;