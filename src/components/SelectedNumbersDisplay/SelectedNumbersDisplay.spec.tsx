import React from 'react';
import SelectedNumbersDisplay from "./SelectedNumbersDisplay";
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import Number from "../Number/Number";

describe("SelectedNumbersDisplay component snapshot tests", () => {
    it("should match snapshot for all numbers selected", () => {
        const component = renderer.create(
            <SelectedNumbersDisplay onNumberClick={() => ''} selectedNumbers={[1, 2, 3, 4, 5, 6, 7, 8, 9]}/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("should match snapshot for no numbers selected", () => {
        const component = renderer.create(
            <SelectedNumbersDisplay onNumberClick={() => ''} selectedNumbers={[]}/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("should match snapshot for some numbers selected", () => {
        const component = renderer.create(
            <SelectedNumbersDisplay onNumberClick={() => ''} selectedNumbers={[1, 2, 7, 8]}/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe('SelectedNumbersDisplay component tests', () => {
    it("should render correct number of Number components", () => {
        const selectedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const wrapper = mount(<SelectedNumbersDisplay onNumberClick={() => ''}
                                                      selectedNumbers={selectedNumbers}/>)
        const renderedNumberComponents = wrapper.find(Number)
        expect(renderedNumberComponents.length).toBe(selectedNumbers.length)
    })
    it("should render correct numbers values", () => {
        const selectedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const wrapper = mount(<SelectedNumbersDisplay onNumberClick={() => ''}
                                                      selectedNumbers={selectedNumbers}/>)
        const renderedNumberComponents = wrapper.find(Number)
        expect(renderedNumberComponents.length).toBe(selectedNumbers.length)
        renderedNumberComponents.forEach((component, i) => {
            expect(component.prop("numberValue")).toBe(selectedNumbers[i])

        })
    })
    it("should call onNumberClick function when click triggered on selected Number element", () => {
        const onNumberClick = jest.fn()
        const selectedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const wrapper = mount(<SelectedNumbersDisplay onNumberClick={onNumberClick}
                                                      selectedNumbers={selectedNumbers}/>)
        const number = wrapper.find(Number).first()
        number.simulate("click")
        expect(onNumberClick).toBeCalledTimes(1)
    })
});