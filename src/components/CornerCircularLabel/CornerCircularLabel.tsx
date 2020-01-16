import React from 'react';
import './CornerCircularLabel.scss';
import {Corner} from '../../services/CommonTypes'
import classNames from "classnames";

interface Props {
    value: string | number,
    corner: Corner
}

const CornerCircularLabel: React.FC<Props> = (props: Props) => {
    const resolveCornerClass = () => {
        switch (props.corner) {
            case Corner.BOTTOM_RIGHT:
                return 'bottom-right'
            case Corner.BOTTOM_LEFT:
                return 'bottom-left'
            case Corner.TOP_LEFT:
                return 'top-left'
            case Corner.TOP_RIGHT:
                return 'top-right'
            default:
                return ''
        }
    }
    return (
        <div className={classNames('corner-circular-label', resolveCornerClass())} onClick={(e) => e.stopPropagation()}>
            {props.value}
        </div>
    )
}


export default CornerCircularLabel;