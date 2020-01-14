import React from 'react';
import NumbersDisplay from "../NumbersDisplay/NumbersDisplay";

interface Props {
    numbersCount: number,
    availableNumbers: Array<number>,
    selectNumber: (selectedNumber: number) => void
}

const SecondGameRow: React.FC<Props> = (props: Props) => {
    return (
        <>
            <NumbersDisplay availableNumbers={props.availableNumbers} onNumberClick={props.selectNumber} numbersCount={props.numbersCount}/>
        </>
    );
}

export default SecondGameRow;