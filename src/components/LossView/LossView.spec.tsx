import React from 'react';
import LossView from "./LossView";
import renderer from 'react-test-renderer';

describe("LossView component snapshot tests", () => {
    it("should match snapshot", () => {
        const component = renderer.create(
            <LossView onClick={() => ''}/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})