import React from 'react';
import './Number.scss';

interface Props {
    numberValue: number,
    onNumberClick: (numberValue: number) => void;
    isAvailable: boolean
}

const Number: React.FC<Props> = (props: Props) => {
    return (
        <button key={props.numberValue} className={'number' + (props.isAvailable ? '' : ' not-available')}
                disabled={!props.isAvailable} onClick={() => props.onNumberClick(props.numberValue)}>
            {props.numberValue}
        </button>
    )
}

export default Number;