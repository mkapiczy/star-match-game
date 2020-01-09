import React from 'react';
// @ts-ignore
import logo from '../../logo.svg';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="App-header">
            <a href="/">
                <img src={logo} className="App-logo" alt="logo"/>
            </a>
            <p>
                Match Stars Game
            </p>
        </header>
    );
}

export default Header;