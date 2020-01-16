import React from 'react';
// @ts-ignore
import logo from '../../assets/logo.svg';
import './Header.scss';

const Header: React.FC = () => {
    return (
        <header className="App-header">
            <a href="/">
                <img title="logo" src={logo} className="App-logo" alt="logo"/>
            </a>
            <p className="app-title">
                Match Stars Game
            </p>
        </header>
    );
}

export default Header;