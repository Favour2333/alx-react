import React from "react"
import CourseList from "./CourseList"
import CourseListRow from "./CourseListRow"
import { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

// Configure the Enzyme adapter
configure({ adapter: new Adapter() })

describe("CourseList component tests", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseList />)

    expect(wrapper.exists()).toBe(true)
  })

  it("renders 5 different rows", () => {
    const wrapper = shallow(<CourseList />)

    expect(wrapper.find("thead").children()).toHaveLength(2)
    wrapper.find("thead").forEach((node) => {
      expect(node.equals(<CourseListRow textFirstCell="Foo" />))
    })

    expect(wrapper.find("tbody").children()).toHaveLength(3)
    wrapper.find("tbody").forEach((node) => {
      expect(node.equals(<CourseListRow textFirstCell="Foo" />))
    })
  })
})