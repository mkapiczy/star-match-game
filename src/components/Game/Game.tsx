import React from 'react';
import './Game.css';


const StarsDisplay: React.FC = () => {
    return (
        <div className="StarsDisplay">
            Stars
        </div>
    )
}

const SelectedNumbersDisplay: React.FC = () => {
    return (
        <div className="SelectedNumbersDisplay">
            Selected Numbers
        </div>
    )
}

const NumbersDisplay: React.FC = () => {
    return (
        <div className="NumbersDisplay">
            Numbers Display
        </div>
    )
}

const ApproveButton: React.FC = () => {
    return (
        <button className="ApproveButton">
            Approve
        </button>
    )
}

const RepeatDrawButton: React.FC = () => {
    return (
        <button className="RepeatDrawButton">
            Repeat
        </button>
    )
}

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