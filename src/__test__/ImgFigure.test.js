import { render, cleanup } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ImgFigure from "../components/ImgFigure";

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

const fakeImage = {
  title: "image titile",
  src: "url-src",
  full: "url-full-src",
  description: "image description",
};

test("<ImgFigure /> component renders correctly", async () => {
  const container = render(<ImgFigure />);
  const figureElement = await container.findByRole("figure");
  expect(figureElement).toBeInTheDocument();

  const titleElement = await container.findByTestId("title");
  expect(titleElement.textContent).toBe("Image title");
});

test("<ImgFigure /> component renders image data", async () => {
  const container = render(<ImgFigure {...fakeImage} />);
  const imgElement = await container.findByRole("img");
  expect(imgElement.getAttribute("src")).toBe(fakeImage.src);
  expect(imgElement.getAttribute("alt")).toBe(fakeImage.title);
});

test("<ImgFigure /> component renders image metadata title", async () => {
  const container = render(<ImgFigure {...fakeImage} />);
  const titleElement = await container.findByTestId("title");
  expect(titleElement.textContent).toBe(fakeImage.title);
});

test("<ImgFigure /> click the figure fire function callback", async () => {
  const openModelMocked = jest.fn();
  const container = shallow(
    <ImgFigure {...fakeImage} openModalCallback={openModelMocked} />
  );
  const figureElement = await container.find("figure");
  figureElement.simulate("click");
  expect(openModelMocked.mock.calls.length).toEqual(1);
});

test("Gallery component should match the snapshot", () => {
  const wrapper = shallow(<ImgFigure />);
  expect(wrapper.html()).toMatchSnapshot();
  cleanup();
});
