"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const ButtonType = [
  "primary",
  "success",
  "info",
  "warning",
  "danger",
  "text"
];
const buttonProps = {
  type: {
    type: String,
    validator(value) {
      return ButtonType.includes(value);
    }
  }
};
exports.ButtonType = ButtonType;
exports.buttonProps = buttonProps;
