import React from 'react';

interface Props {
    timer: number
}

const Timer: React.FC<Props> = (props: Props) => {
    return (
        <div className="timer" style={{fontWeight: "bold"}}>Time left: {props.timer}</div>
    );
}

export default Timer;