import React, { Fragment } from "react";
import reactDom from "react-dom";

import classes from "./ui.module.css";

const BackShade = (props) => {
  return <div className={classes.backshade} onClick={props.onClose}></div>;
};
const Overlay = (props) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  return (
    <Fragment>
      {reactDom.createPortal(
        <BackShade onClose={props.onClose}></BackShade>,
        document.getElementById("overlays")
      )}
      {reactDom.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Modal;
