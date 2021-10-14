import {
  render,
  screen,
  cleanup,
} from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

import App from "./../App";

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
