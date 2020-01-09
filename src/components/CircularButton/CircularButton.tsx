import React from 'react';
import './CircularButton.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconDefinition} from '@fortawesome/free-solid-svg-icons'

interface Props {
    icon:IconDefinition,
    onClick: () => void;

}
const CircularButton: React.FC<Props> = (props:Props) => {
    return (
        <div className="button-area">
            <button className="button" onClick={props.onClick}>
                <FontAwesomeIcon icon={props.icon}/>
            </button>
        </div>
    )
}


export default CircularButton;