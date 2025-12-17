import React from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  isDisabled = false,
}) => {
  // Dynamically assign CSS classes based on props
  // String interpolation to build the class list
  const buttonClasses = `${styles.buttonBase} ${styles[variant]} ${styles[size]}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
