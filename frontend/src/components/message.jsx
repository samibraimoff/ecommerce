import React from "react";
import { Alert } from "react-bootstrap";

const Message = (props) => {
  const { children, variant } = props;
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
