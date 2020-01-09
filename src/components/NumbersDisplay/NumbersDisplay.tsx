import React from 'react';
import './NumbersDisplay.css';
import Number from '../Number/Number';

interface Props {
    availableNumbers: Array<number>,
    onNumberClick: (selectedNumber: number) => void;
}

const NumbersDisplay: React.FC<Props> = (props: Props) => {
    return (
        <div className="NumbersDisplay">
            {[...Array(9)].map((e, i) => <Number key={i} numberValue={i+1} onNumberClick={props.onNumberClick} isAvailable={props.availableNumbers.includes(i+1)}/>)}
        </div>
    )
}

export default NumbersDisplay;