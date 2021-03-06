import React from 'react';
import './StarsDisplay.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash'

interface Props {
    roundNumber: number;
    numberOfStars: number;
}

const StarsDisplay: React.FC<Props> = (props: Props) => {
    return (
        <div className="StarsDisplay">
            <h3 className="title">Round {props.roundNumber}:</h3>
            <div className="stars">
                {[..._.range(0, props.numberOfStars)].map((e, i) => <FontAwesomeIcon className="star" key={i}
                                                                                     icon={faStar}/>)}
            </div>
        </div>
    )
}


export default StarsDisplay;