import React from "react";
import "../styles/Button.css";

const Button = ({ onClick, text }) => {
  return (
    <button className="button-6" role="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
