import React from "react";
import "./Button.css";

const Button = (props) => {
  return <a href={props.url}>{props.title}</a>;
};

export default Button;
