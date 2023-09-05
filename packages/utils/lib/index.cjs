"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const install = require("./install.cjs");
const testfn = () => {
  console.log("utils-test2");
};
exports.withInstall = install.withInstall;
exports.testfn = testfn;
