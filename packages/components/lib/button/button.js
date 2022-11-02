"use strict";
const button_vue_vue_type_script_lang = require("./button.vue_vue_type_script_lang.js");
const vue = require("vue");
require("./button.vue_vue_type_style_index_0_lang.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("button", {
    class: vue.normalizeClass(["hcl-button", _ctx.styleClass])
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 2);
}
const Button = /* @__PURE__ */ _pluginVue_exportHelper(button_vue_vue_type_script_lang, [["render", _sfc_render]]);
module.exports = Button;
