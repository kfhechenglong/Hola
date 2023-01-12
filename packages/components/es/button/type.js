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
export {
  ButtonType,
  buttonProps
};
