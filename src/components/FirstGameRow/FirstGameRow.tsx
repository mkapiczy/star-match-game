import React from 'react';
import './FirstGameRow.css';

import StarsDisplay from '../StarsDisplay/StarsDisplay';
import SelectedNumbersDisplay from '../SelectedNumbersDisplay/SelectedNumbersDisplay';
import CircularButton from '../CircularButton/CircularButton';
import {faCheck, faReply} from '@fortawesome/free-solid-svg-icons'
import CornerCircularLabel from '../CornerCircularLabel/CornerCircularLabel';
import StartGameButton from "../StartGameButton/StartGameButton";
import {Corner, GameState} from "../../services/CommonTypes"

interface Props {
    roundNumber: number,
    numberOfStars: number,
    restartGame: any,
    approveSelectedNumbers: any,
    retryDraw: any,
    unselectNumber: any,
    selectedNumbers: Array<number>,
    gameState: GameState,
    areSelectedNumbersCorrect: boolean,
    areRetriesEnabled: boolean,
    availableNumberOfRetries: number
}

const FirstGameRow: React.FC<Props> = (props: Props) => {
    return (
        <>
            <StarsDisplay roundNumber={props.roundNumber} numberOfStars={props.numberOfStars}/>
            {props.gameState === GameState.NOT_INITIALIZED ?
                <StartGameButton onClick={props.restartGame}/> :
                <>
                    <div className="button-column">
                        <CircularButton icon={faCheck} isBlocked={!props.areSelectedNumbersCorrect}
                                        onClick={props.approveSelectedNumbers}/>
                    </div>
                    <div className="button-column">
                        <CircularButton icon={faReply} isBlocked={!props.areRetriesEnabled} onClick={props.retryDraw}>
                            <CornerCircularLabel value={props.availableNumberOfRetries}
                                                 corner={Corner.TOP_RIGHT}/>
                        </CircularButton>
                    </div>
                </>
            }
            <SelectedNumbersDisplay selectedNumbers={props.selectedNumbers} onNumberClick={props.unselectNumber}/>
        </>
    );
}

export default FirstGameRow;