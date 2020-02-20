import React from 'react';
import VictoryView from "./VictoryView";
import renderer from 'react-test-renderer';

describe("VictoryView component snapshot tests", () => {
    it("should match snapshot", () => {
        const component = renderer.create(
            <VictoryView onClick={() => ''}/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})