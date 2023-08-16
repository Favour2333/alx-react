import React from "react";
import Header from "./Header";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Configure the Enzyme adapter
configure({ adapter: new Adapter() });

describe("Header", () => {
  it("render without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should render a h1", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("img")).toEqual(true);
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(
      true
    );
  });
});
