import React from "react";
import "../../styles.css";

const Button = ({ onFetch }) => {
  return (
    <button className="Button" type="button" onClick={onFetch}>
      Load more
    </button>
  );
};

export default Button;
