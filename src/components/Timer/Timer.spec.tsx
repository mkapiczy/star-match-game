import React from 'react';
import Timer from "./Timer";
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import Number from "../Number/Number";

describe("Timer component snapshot tests", () => {
    it("should match snapshot", () => {
        const component = renderer.create(
            <Timer timer={5}/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe('Timer component tests', () => {
    it("should render correct timer value", () => {
        const timerValue = 9
        const wrapper = mount( <Timer timer={timerValue}/>)
        const timer = wrapper.find('.timer')
        expect(timer.text()).toBe(`Time left: ${timerValue}`)

    })
});