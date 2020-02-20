import React from 'react';
import CornerCircularLabel from "./CornerCircularLabel";
import renderer from 'react-test-renderer';
import {Corner} from "../../services/CommonTypes";

describe("CornerCircularLabel component snapshot tests", () => {
    it("should match snapshot", () => {
        const component = renderer.create(
            <CornerCircularLabel value={2} corner={Corner.TOP_RIGHT}/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})