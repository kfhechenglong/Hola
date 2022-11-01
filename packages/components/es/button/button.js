import _sfc_main from "./button.vue_vue_type_script_lang.js";
import { openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
/* empty css                                        */import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["hcl-button", _ctx.styleClass])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Button as default
};
