import React from 'react';
import ThirdGameRow from "./ThirdGameRow";
import {mount} from 'enzyme';
import {GameState} from "../../services/CommonTypes";
import Timer from "../Timer/Timer";
import VictoryView from "../VictoryView/VictoryView";
import LossView from "../LossView/LossView";

describe('ThirdGameRow component tests', () => {
    it("should render correctly when game is not initialized", () => {
        const timerCount = 10
        const restartGame = jest.fn()
        const wrapper = mount(<ThirdGameRow gameState={GameState.NOT_INITIALIZED} timerCount={timerCount}
                                            restartGame={restartGame}/>)
        expect(wrapper.text()).toBe('')
    })

    it("should render correctly when game is in progress", () => {
        const timerCount = 10
        const restartGame = jest.fn()
        const wrapper = mount(<ThirdGameRow gameState={GameState.IN_PROGRESS} timerCount={timerCount}
                                            restartGame={restartGame}/>)
        expect(wrapper.contains(<Timer timer={timerCount}/>)).toBe(true)
    })

    it("should render correctly when game is won", () => {
        const timerCount = 10
        const restartGame = jest.fn()
        const wrapper = mount(<ThirdGameRow gameState={GameState.WON} timerCount={timerCount}
                                            restartGame={restartGame}/>)
        expect(wrapper.contains(<VictoryView onClick={restartGame}/>)).toBe(true)
    })

    it("should render correctly when game is lost", () => {
        const timerCount = 10
        const restartGame = jest.fn()
        const wrapper = mount(<ThirdGameRow gameState={GameState.LOST} timerCount={timerCount}
                                            restartGame={restartGame}/>)
        expect(wrapper.contains(<LossView onClick={restartGame}/>)).toBe(true)
    })

});