const withInstall = (comp) => {
  const c = comp;
  console.log(c);
  c.install = function(app) {
    app.component(c.displayName || c.name, c);
  };
  return c;
};
export {
  withInstall
};
