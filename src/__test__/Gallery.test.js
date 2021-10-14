import {
  render,
  screen,
  cleanup,
  waitFor,
} from "@testing-library/react";

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { unmountComponentAtNode } from "react-dom";
import Gallery from "./../pages/Gallery";

configure({ adapter: new Adapter() });

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  cleanup();
  container.remove();
  container = null;
});

test("Gallery component renders correctly and has section text", async () => {
  const wrapper = shallow(<Gallery />);
  expect(await wrapper.find("Gallery Section")).toBeTruthy();
  cleanup()
});

test("Gallery component should match the snapshot", () => {
  const wrapper = shallow(<Gallery />);
  expect(wrapper.html()).toMatchSnapshot();
  cleanup();
});

it("should have an email field", () => {
  const wrapper = shallow(<Gallery />);
  expect(wrapper.find(".gallery-container").length).toEqual(1);
  cleanup();
});

test("when fetch data loading is showing", async () => {
  render(<Gallery />, container);
  expect(await screen.findByText(/Loading/i)).toBeInTheDocument();
  cleanup();
});

test("fetchImages has been called once when component initial", async () => {
  render(<Gallery />, container);

  expect(await screen.findByText("Loading")).toBeInTheDocument();

  expect(
    await waitFor(() => screen.findByTestId("list", {}, { timeout: 3000 }))
  ).toBeInTheDocument();
});
