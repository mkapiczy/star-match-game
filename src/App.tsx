import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import Game from './components/Game/Game'

const App: React.FC = () => {
    return (
        <div className="App">
            <Header/>
            <Game/>
        </div>
    );
};

export default App;