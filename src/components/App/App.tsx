import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Game from '../Game/Game'

const App: React.FC = () => {
    return (
        <div className="App">
            <Header/>
            <Game/>
        </div>
    );
};

export default App;