import React from 'react';
import App from './App';
import {mount} from "enzyme";
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";

describe("App tests", () => {
  it("should render app correctly", () => {
    const wrapper = mount(<App/>)
    expect(wrapper.contains(<Header/>)).toEqual(true)
    expect(wrapper.contains(<Game/>)).toEqual(true)
  })
})
