import React from "react";

const Child: React.FC = ({ children, ...props }) => {
  const child = React.Children.only(children);

  return React.isValidElement(child) ? React.cloneElement(child, props) : <></>;
};

export default Child;
