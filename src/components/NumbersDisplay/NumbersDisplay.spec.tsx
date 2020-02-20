import React from 'react';
import NumbersDisplay from "./NumbersDisplay";
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import Number from "../Number/Number";

describe("NumbersDisplay component snapshot tests", () => {
    it("should match snapshot for all numbers available", () => {
        const component = renderer.create(
            <NumbersDisplay numbersCount={9} onNumberClick={() => ''} availableNumbers={[1, 2, 3, 4, 5, 6, 7, 8, 9]}/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("should match snapshot for no numbers available", () => {
        const component = renderer.create(
            <NumbersDisplay numbersCount={9} onNumberClick={() => ''} availableNumbers={[]}/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("should match snapshot for some numbers available", () => {
        const component = renderer.create(
            <NumbersDisplay numbersCount={9} onNumberClick={() => ''} availableNumbers={[1, 2, 7, 8]}/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe('NumbersDisplay component tests', () => {
    it("should render correct number of Number components", () => {
        const expectedNumberOfNumberComponents = 9
        const wrapper = mount(<NumbersDisplay numbersCount={expectedNumberOfNumberComponents} availableNumbers={[]}
                                              onNumberClick={() => ''}/>)
        const renderedNumberComponents = wrapper.find(Number)
        expect(renderedNumberComponents.length).toBe(expectedNumberOfNumberComponents)
    })
    it("should render all available numbers as available with correct numberValue", () => {
        const expectedNumberOfNumberComponents = 9
        const availableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const wrapper = mount(<NumbersDisplay numbersCount={expectedNumberOfNumberComponents} availableNumbers={availableNumbers}
                                              onNumberClick={() => ''}/>)
        const renderedNumberComponents = wrapper.find(Number)
        renderedNumberComponents.forEach((component, i) => {
            expect(component.prop("isAvailable")).toBe(true)
            expect(component.prop("numberValue")).toBe(i + 1)
        })
    })

    it("should render all numbers as not available with correct numberValue", () => {
        const expectedNumberOfNumberComponents = 9
        const wrapper = mount(<NumbersDisplay numbersCount={expectedNumberOfNumberComponents} availableNumbers={[]}
                                              onNumberClick={() => ''}/>)
        const renderedNumberComponents = wrapper.find(Number)
        renderedNumberComponents.forEach((component, i) => {
            expect(component.prop("isAvailable")).toBe(false)
            expect(component.prop("numberValue")).toBe(i + 1)
        })
    })

    it("should call onNumberClick function when click triggered on Number with isAvailable true", () => {
        const onNumberClick = jest.fn()
        const expectedNumberOfNumberComponents = 9
        const availableNumbers = [1]
        const wrapper = mount(<NumbersDisplay numbersCount={expectedNumberOfNumberComponents} availableNumbers={availableNumbers}
                                              onNumberClick={onNumberClick}/>)
        const renderedNumberComponents = wrapper.find(Number)
        const availableNumber = renderedNumberComponents.find({"isAvailable": true}).first()
        availableNumber.simulate("click")
        expect(onNumberClick).toBeCalledTimes(1)
    })

    it("should not call onNumberClick function when click triggered on Number with isAvailable false", () => {
        const onNumberClick = jest.fn()
        const expectedNumberOfNumberComponents = 9
        const availableNumbers = [1]
        const wrapper = mount(<NumbersDisplay numbersCount={expectedNumberOfNumberComponents} availableNumbers={availableNumbers}
                                              onNumberClick={onNumberClick}/>)
        const renderedNumberComponents = wrapper.find(Number)
        const availableNumber = renderedNumberComponents.find({"isAvailable": false}).first()
        availableNumber.simulate("click")
        expect(onNumberClick).not.toBeCalled()
    })
});