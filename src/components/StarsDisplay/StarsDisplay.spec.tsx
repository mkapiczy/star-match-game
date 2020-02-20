import React from 'react';
import StarsDisplay from "./StarsDisplay";
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import Number from "../Number/Number";

describe("StarsDisplay component snapshot tests", () => {
    it("should match snapshot for 9 stars", () => {
        const component = renderer.create(
            <StarsDisplay roundNumber={2} numberOfStars={9}/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("should match snapshot for 0 stars", () => {
        const component = renderer.create(
            <StarsDisplay roundNumber={2} numberOfStars={0}/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe('StarsDisplat component tests', () => {
    it("should render correct number of stars", () => {
        const numberOfStars = 9
        const wrapper = mount( <StarsDisplay roundNumber={2} numberOfStars={numberOfStars}/>)
        const stars = wrapper.find('.stars').children()
        expect(stars.length).toBe(numberOfStars)
    })
    it("should render correct round number", () => {
        const roundNumber = 2
        const wrapper = mount( <StarsDisplay roundNumber={roundNumber} numberOfStars={9}/>)
        const title = wrapper.find('.title')
        expect(title.text()).toBe(`Round ${roundNumber}:`)
    })
});