"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const withInstall = (comp) => {
  const c = comp;
  c.install = function(app) {
    app.component(c.displayName || c.name, c);
  };
  return c;
};
exports.withInstall = withInstall;
