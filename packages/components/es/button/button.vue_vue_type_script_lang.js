import { defineComponent, computed } from "vue";
import { buttonProps } from "./type.js";
const _sfc_main = defineComponent({
  name: "hcl-button",
  props: buttonProps,
  setup(props) {
    const styleClass = computed(() => {
      return {
        [`hcl-button--${props.type}`]: props.type
      };
    });
    return {
      styleClass
    };
  }
});
export {
  _sfc_main as default
};
