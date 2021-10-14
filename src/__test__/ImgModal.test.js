import { render, cleanup } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ImgModal from "../components/ImgModal";

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

test("<ImgModal /> component renders correctly", async () => {
  const container = render(<ImgModal />);
  const modalElement = await container.findByTestId("modal");
  expect(modalElement).toBeInTheDocument();
});

test("<ImgModal /> component renders image data", async () => {
  const container = render(<ImgModal {...fakeImage} />);
  const imgElement = await container.findByTestId("img");
  const titleElement = await container.findByTestId("title");
  const descriptionElement = await container.findByTestId("description");
  expect(imgElement.getAttribute("src")).toBe(fakeImage.full);
  expect(imgElement.getAttribute("alt")).toBe(fakeImage.title);
  expect(titleElement.textContent).toBe(fakeImage.title);
  expect(descriptionElement.textContent).toBe(fakeImage.description);
});

test("<ImgModal /> appears when modalStatus true", async () => {
  const container = render(<ImgModal {...fakeImage} modalStatus={true} />);
  const modalElement = await container.findByTestId("modal");
  expect(modalElement.getAttribute("class")).toBe("modal show");
});

test("<ImgModal /> disappears when modalStatus false", async () => {
  const container = render(<ImgModal {...fakeImage} modalStatus={false} />);
  const modalElement = await container.findByTestId("modal");
  expect(modalElement.getAttribute("class")).toBe("modal");
});

test("<ImgModal /> click the close btn fire function callback", async () => {
  const closeModal = jest.fn();
  const container = shallow(<ImgModal handleCloseModalCb={closeModal} />);
  const closeBtn = await container.find('button');
  closeBtn.simulate("click");
  expect(closeModal.mock.calls.length).toEqual(1);
});

test("ImgModal component should match the snapshot", () => {
  const wrapper = shallow(<ImgModal />);
  expect(wrapper.html()).toMatchSnapshot();
  cleanup();
});
