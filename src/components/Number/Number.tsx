import React from 'react';
import './Number.scss';
import classNames from "classnames";

interface Props {
    numberValue: number,
    onNumberClick: (numberValue: number) => void;
    isAvailable: boolean
}

const Number: React.FC<Props> = (props: Props) => {
    return (
        <button key={props.numberValue} className={classNames('number', {'not-available': !props.isAvailable})}
                disabled={!props.isAvailable} onClick={() => props.onNumberClick(props.numberValue)}>
            {props.numberValue}
        </button>
    )
}

export default Number;