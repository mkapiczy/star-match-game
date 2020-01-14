import React from 'react';
import Number from "./Number";
import {fireEvent, render} from '@testing-library/react';
import renderer from 'react-test-renderer';

describe("Number component tests", () => {
    it("should render Number component", () => {
        const onNumberClick = jest.fn()
        const {getByText} = render(
            <Number numberValue={2} isAvailable={true} onNumberClick={onNumberClick}/>,
        );
        const numberButon = getByText("2")
        expect(numberButon).toBeInTheDocument()
    })
    it("should call onNumberClick method when number button available", ()=> {
        const onNumberClick = jest.fn()
        const {getByText} = render(
            <Number numberValue={2} isAvailable={true} onNumberClick={onNumberClick}/>,
        );
        const numberButon = getByText("2")
        fireEvent.click(numberButon)
        expect(onNumberClick).toBeCalledTimes(1)
    })
    it("should not call onNumberClick method when number button is not available", ()=> {
        const onNumberClick = jest.fn()
        const {getByText} = render(
            <Number numberValue={2} isAvailable={false} onNumberClick={onNumberClick}/>,
        );
        const numberButon = getByText("2")
        fireEvent.click(numberButon)
        expect(onNumberClick).not.toBeCalled()
    })
    it("should match snapshot for button available true", () => {
        const component = renderer.create(
            <Number numberValue={2} isAvailable={true} onNumberClick={() => ''}/>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("should match snapshot for button available false", () => {
        const component = renderer.create(
            <Number numberValue={2} isAvailable={false} onNumberClick={() => ''}/>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})