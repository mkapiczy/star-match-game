import React from 'react';
import './NumbersDisplay.css';

interface Props {
    availableNumbers: Array<number>,
    onNumberClick: (selectedNumber: number) => void;
}

const NumbersDisplay: React.FC<Props> = (props: Props) => {
    return (
        <div className="NumbersDisplay">
            {[...Array(9)].map((e, i) => <button
                className={'circular-button' + (props.availableNumbers.includes(i + 1) ? '' : ' not-available')} onClick={() => props.onNumberClick(i+1)}>{i + 1}</button>)}
        </div>
    )
}

export default NumbersDisplay;