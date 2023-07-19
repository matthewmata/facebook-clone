import ReactPortal from "./ReactPortal";

import Bubble from "./Bubble";

import classes from "./Modal.module.scss";
import { cloneElement } from "react";

const Modal = ({ children, header, isOpen, handleClose }) => {
  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="root-modal">
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          <h3>{header}</h3>
          <hr></hr>
          <div onClick={handleClose} className={classes["button-close"]}>
            <Bubble className="nav-bubble">
              <i className={classes["exit-icon"]}></i>
            </Bubble>
          </div>
          <div className={classes["modal-content"]}>
            {cloneElement(children, { header, isOpen, handleClose })}
          </div>
        </div>
      </div>
    </ReactPortal>
  );
};
export default Modal;
