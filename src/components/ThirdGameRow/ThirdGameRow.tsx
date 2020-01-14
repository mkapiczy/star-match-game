import React from 'react';
import Timer from "../Timer/Timer";
import VictoryView from "../VictoryView/VictoryView";
import LossView from "../LossView/LossView";
import {GameState} from "../../services/CommonTypes";

interface Props {
    gameState: GameState,
    timerCount: number,
    restartGame: () => void
}

const ThirdGameRow: React.FC<Props> = (props: Props) => {
    const isGameInitialized = (): boolean => {
        return props.gameState !== GameState.NOT_INITIALIZED
    }
    const isGameInProgress = (): boolean => {
        return props.gameState === GameState.IN_PROGRESS
    }
    const isGameWon = (): boolean => {
        return props.gameState === GameState.WON
    }
    return (
        <>
            {isGameInitialized() ? isGameInProgress() ? <Timer timer={props.timerCount}/> :
                isGameWon() ? <VictoryView onClick={props.restartGame}/> : <LossView onClick={props.restartGame}/> : ''}
        </>
    );
}

export default ThirdGameRow;