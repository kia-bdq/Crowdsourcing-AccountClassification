import React, { useRef, useEffect } from "react";
import { MDCRipple } from "@material/ripple";
import "./styles.scss";

const Button = function (props) {
  const b = document.createElement('button')
  const ref = useRef(b);

  useEffect(() => {
    new MDCRipple(ref.current);
  }, []);

  let customClass = !!props.unelevated ? " mdc-button--unelevated" : "";

  return (
    <button
      className={"mdc-button mdc-button--raised" + customClass}
      ref={ref}
      {...props}
    >
      <span className="mdc-button__ripple"></span>
      <span className="mdc-button__label">{props.children}</span>
    </button>
  );
};
export default Button;
