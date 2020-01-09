import React from 'react';
import './Number.css';

interface Props {
    numberValue: number,
    onNumberClick: (numberValue: number) => void;
    isAvailable: boolean
}

const Number: React.FC<Props> = (props: Props) => {
    return (
        <button key={props.numberValue} className={'number' + (props.isAvailable ? '' : ' not-available')}
                onClick={() => props.onNumberClick(props.numberValue)}>
            {props.numberValue}
        </button>
    )
}

export default Number;