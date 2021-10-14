import {
  render,
  cleanup,
} from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./../App";

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

test("App component renders correctly", async () => {
  const container = render(<App />);
  const mainElement = await container.findByRole("main");
  expect(mainElement).toBeInTheDocument();
});


test("Gallery component should match the snapshot", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.html()).toMatchSnapshot();
  cleanup();
});