import React from 'react';
import './SelectedNumbersDisplay.scss';
import Number from '../Number/Number'

interface Props {
    selectedNumbers: Array<number>
    onNumberClick: (selectedNumber: number) => void;
}

const SelectedNumbersDisplay: React.FC<Props> = (props: Props) => {
    return (
        <div className="SelectedNumbersDisplay">
            {props.selectedNumbers.map(number => <Number key={number} numberValue={number} onNumberClick={props.onNumberClick} isAvailable={true}/>)}
        </div>
    )
}


export default SelectedNumbersDisplay;