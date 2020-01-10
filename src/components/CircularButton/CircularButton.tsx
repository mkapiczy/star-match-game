import React from 'react';
import './CircularButton.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconDefinition} from '@fortawesome/free-solid-svg-icons'

interface Props {
    icon: IconDefinition,
    isBlocked: boolean,
    onClick: () => void,
    children?: any
}

const CircularButton: React.FC<Props> = (props: Props) => {
    return (
        <button className={"button" + (props.isBlocked ? ' disabled' : '')} onClick={props.onClick}>
            <FontAwesomeIcon icon={props.icon}/>
            {props.children}
        </button>
    )
}


export default CircularButton;