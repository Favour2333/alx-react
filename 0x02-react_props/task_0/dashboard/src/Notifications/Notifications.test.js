import React from "react";
import { shallow, configure } from "enzyme";
import Notifications from "./Notifications";
import Adapter from "enzyme-adapter-react-16";

// Configure the Enzyme adapter
configure({ adapter: new Adapter() });

describe("Notification component tests", () => {
  it("renders Notification component without crashing", () => {
    const notification = shallow(<Notifications />);
    expect(notification).toBeDefined();
  });

  it("renders ul", () => {
    const notification = shallow(<Notifications />);
    expect(notification.find("ul")).toBeDefined();
  });

  it("renders three list items", () => {
    const notification = shallow(<Notifications />);
    expect(notification.find("li")).toHaveLength(3);
  });

  it("renders correct text", () => {
    const notification = shallow(<Notifications />);
    expect(notification.find("p").text()).toBe(
      "Here is the list of notifications"
    );
  });
});
