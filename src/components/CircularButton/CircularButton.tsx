import React from 'react';
import './CircularButton.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconDefinition} from '@fortawesome/free-solid-svg-icons'

interface Props {
    icon: IconDefinition,
    isBlocked: boolean,
    onClick: () => void
}

const CircularButton: React.FC<Props> = (props: Props) => {
    return (
        <div className="button-area">
            <button className={"button" + (props.isBlocked ? ' disabled' : '')} onClick={props.onClick}>
                <FontAwesomeIcon icon={props.icon}/>
            </button>
        </div>
    )
}


export default CircularButton;