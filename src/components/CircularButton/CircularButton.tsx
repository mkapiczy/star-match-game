import React from 'react';
import './CircularButton.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconDefinition} from '@fortawesome/free-solid-svg-icons'
import classNames from "classnames"


interface Props {
    icon: IconDefinition,
    isBlocked: boolean,
    onClick: () => void,
    children?: any
}

const CircularButton: React.FC<Props> = (props: Props) => {
    return (
        <button className={classNames('button', {'disabled': props.isBlocked})} disabled={props.isBlocked}
                onClick={props.onClick}>
            <FontAwesomeIcon icon={props.icon}/>
            {props.children}
        </button>
    )
}


export default CircularButton;