"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vueQuarterPicker = require("./vue-quarter-picker.js");
/* empty css         */const index = {
  install(app) {
    app.component("QuarterSelect", vueQuarterPicker);
  }
};
exports.QuarterSelect = vueQuarterPicker;
exports.default = index;
