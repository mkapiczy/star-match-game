import React from 'react';
import './NumbersDisplay.scss';
import Number from '../Number/Number';

interface Props {
    numbersCount: number,
    availableNumbers: Array<number>,
    onNumberClick: (selectedNumber: number) => void;
}

const NumbersDisplay: React.FC<Props> = (props: Props) => {
    return (
        <div className="NumbersDisplay">
            {[...Array(props.numbersCount)].map((e, i) => {
                const currentNumber = i + 1
                return <Number key={currentNumber} numberValue={currentNumber} onNumberClick={props.onNumberClick}
                               isAvailable={props.availableNumbers.includes(currentNumber)}/>
            })}
        </div>
    )
}

export default NumbersDisplay;