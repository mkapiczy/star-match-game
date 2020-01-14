import React from 'react';
import Header from "./Header";
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';

describe("Header component tests", () => {
    it("should render Header component", () => {
        const {getByText, getByTitle} = render(
            <Header/>,
        );

        const title = getByText("Match Stars Game")
        const logo = getByTitle("logo")
        expect(title).toBeInTheDocument()
        expect(logo.getAttribute("src")).toMatch("logo.svg")
    })
    it("should match snapshot", () => {
        const component = renderer.create(
            <Header/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})