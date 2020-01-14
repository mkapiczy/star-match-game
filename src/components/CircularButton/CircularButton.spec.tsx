import React from 'react';
import CircularButton from "./CircularButton";
import renderer from 'react-test-renderer';
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {mount} from "enzyme";
import Number from "../Number/Number";

describe("CircularButton component snapshot tests", () => {
    it("should match snapshot for faCheck icon isBlocked false", () => {
        const component = renderer.create(
            <CircularButton icon={faCheck} isBlocked={false} onClick={() => ''}/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

    it("should match snapshot for faCheck icon isBlocked true", () => {
        const component = renderer.create(
            <CircularButton icon={faCheck} isBlocked={true} onClick={() => ''}/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe('CircularButton component tests', () => {
    it("should have class disabled if isBlocked is true", () => {
        const wrapper = mount(<CircularButton icon={faCheck} isBlocked={true} onClick={() => ''}/>)
        const button = wrapper.find("button")
        expect(button.hasClass("button")).toBe(true)
        expect(button.hasClass("disabled")).toBe(true)
    })
    it("should not have class disabled if isBlocked is false", () => {
        const wrapper = mount(<CircularButton icon={faCheck} isBlocked={false} onClick={() => ''}/>)
        const button = wrapper.find("button")
        expect(button.hasClass("button")).toEqual(true)
        expect(button.hasClass("disabled")).toEqual(false)
    })
});