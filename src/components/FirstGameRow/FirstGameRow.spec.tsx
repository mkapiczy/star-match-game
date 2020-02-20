import React from 'react';
import FirstGameRow from "./FirstGameRow";
import {mount} from 'enzyme';
import {GameState} from "../../services/CommonTypes";
import StarsDisplay from "../StarsDisplay/StarsDisplay";
import SelectedNumbersDisplay from "../SelectedNumbersDisplay/SelectedNumbersDisplay";

describe('FirstGameRow component tests', () => {
    it("should render correctly when game is not initialized", () => {
        const expectedNumberOfStarsForUninitializedGame = 0
        const roundNumber = 2
        const numberOfStars = 5
        const selectedNumbers = [1, 2, 3]
        const unselectNumber = jest.fn()
        const wrapper = mount(<FirstGameRow roundNumber={roundNumber} numberOfStars={numberOfStars}
                                            restartGame={() => ''} approveSelectedNumbers={() => ''}
                                            retryDraw={() => ''} unselectNumber={unselectNumber}
                                            selectedNumbers={selectedNumbers} gameState={GameState.NOT_INITIALIZED}
                                            areSelectedNumbersCorrect={false} areRetriesEnabled={false}
                                            availableNumberOfRetries={5}/>)
        expect(wrapper.contains(<StarsDisplay roundNumber={roundNumber}
                                              numberOfStars={expectedNumberOfStarsForUninitializedGame}/>)).toEqual(true)
        expect(wrapper.find(".start-game-button").exists()).toEqual(true)
        expect(wrapper.find(".button-column").exists()).toEqual(false)
        expect(wrapper.contains(<SelectedNumbersDisplay selectedNumbers={selectedNumbers}
                                                        onNumberClick={unselectNumber}/>)).toEqual(true)
    })

    it("should render correctly when game is initialized", () => {
        const roundNumber = 2
        const numberOfStars = 5
        const selectedNumbers = [1, 2, 3]
        const unselectNumber = jest.fn()
        const wrapper = mount(<FirstGameRow roundNumber={roundNumber} numberOfStars={numberOfStars}
                                            restartGame={() => ''} approveSelectedNumbers={() => ''}
                                            retryDraw={() => ''} unselectNumber={unselectNumber}
                                            selectedNumbers={selectedNumbers} gameState={GameState.IN_PROGRESS}
                                            areSelectedNumbersCorrect={false} areRetriesEnabled={false}
                                            availableNumberOfRetries={5}/>)
        expect(wrapper.contains(<StarsDisplay roundNumber={roundNumber} numberOfStars={numberOfStars}/>)).toEqual(true)
        expect(wrapper.find(".start-game-button").exists()).toEqual(false)
        expect(wrapper.find(".button-column").exists()).toEqual(true)
        expect(wrapper.find(".button-column").length).toEqual(2)
        expect(wrapper.contains(<SelectedNumbersDisplay selectedNumbers={selectedNumbers}
                                                        onNumberClick={unselectNumber}/>)).toEqual(true)
    })
});