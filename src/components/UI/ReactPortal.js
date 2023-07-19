import { createPortal } from "react-dom";

const createWrapperAndAppendToBody = (wrapperId) => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

const ReactPortal = ({ children, wrapperId }) => {
  let element = document.getElementById(wrapperId);
  if (!element) {
    element = createWrapperAndAppendToBody(wrapperId);
  }
  return createPortal(children, element);
}



export default ReactPortal;
