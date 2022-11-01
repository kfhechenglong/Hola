"use strict";
const vue = require("vue");
const type = require("./type.js");
const _sfc_main = vue.defineComponent({
  name: "hcl-button",
  props: type.buttonProps,
  setup(props) {
    const styleClass = vue.computed(() => {
      return {
        [`hcl-button--${props.type}`]: props.type
      };
    });
    return {
      styleClass
    };
  }
});
module.exports = _sfc_main;
