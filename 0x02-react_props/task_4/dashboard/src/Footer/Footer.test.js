import React from "react";
import Footer from "./Footer";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { getFullYear, getFooterCopy } from "../utils/utils";

// Configure the Enzyme adapter
configure({ adapter: new Adapter() });

describe("Footer test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should render the text Copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toEqual(
      `Copyright ${getFullYear()} - ${getFooterCopy()}`
    );
  });
});
