import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ onFetch }) => {
  return (
    <div className={styles.ButtonWrapper}>
      <button type="button" className={styles.Button} onClick={onFetch}>
        Load more
      </button>
    </div>
  );
};

Button.defaultProps = {
  onClick: () => null,
  children: null,
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
