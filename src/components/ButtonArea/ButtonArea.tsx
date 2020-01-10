import React from 'react';
import './ButtonArea.css';


const ButtonArea: React.FC = (props) => {
    return (
        <div className="button-area">
            {props.children}
        </div>
    )
}


export default ButtonArea;