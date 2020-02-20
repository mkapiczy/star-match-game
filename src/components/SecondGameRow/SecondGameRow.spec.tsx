import React from 'react';
import SecondGameRow from "./SecondGameRow";
import {mount} from 'enzyme';
import NumbersDisplay from "../NumbersDisplay/NumbersDisplay";

describe('FirstGameRow component tests', () => {
    it("should render correctly", () => {
        const numbersCount = 2
        const availabeNumbers = [1, 2, 3]
        const selectNumber = jest.fn()
        const wrapper = mount(<SecondGameRow numbersCount={numbersCount} availableNumbers={availabeNumbers} selectNumber={selectNumber}/>)
        expect(wrapper.contains(<NumbersDisplay availableNumbers={availabeNumbers} onNumberClick={selectNumber} numbersCount={numbersCount}/>)).toEqual(true)
    })
});