import React from "react";
import classNames from "classnames";

function Button({ onClick, className, outline, children, circle }) {
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {
        "button--outline": outline === true,
        "button--circle": circle === true,
      })}
    >
      {children}
    </button>
  );
}

export default Button;
