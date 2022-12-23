"use strict";
const antDesignVue = require("ant-design-vue");
const type = require("./type.js");
const vue = require("vue");
const _pluginVue_exportHelper = require("./_virtual/_plugin-vue_export-helper.js");
const _sfc_main = {
  name: "QuarterSelect",
  data() {
    const currentDate = new Date();
    const quarterOptions = [{
      months: [1, 2, 3],
      key: "Q1",
      label: "\u7B2C\u4E00\u5B63\u5EA6",
      disabled: false
    }, {
      months: [4, 5, 6],
      key: "Q2",
      label: "\u7B2C\u4E8C\u5B63\u5EA6",
      disabled: false
    }, {
      months: [7, 8, 9],
      key: "Q3",
      label: "\u7B2C\u4E09\u5B63\u5EA6",
      disabled: false
    }, {
      months: [10, 11, 12],
      key: "Q4",
      label: "\u7B2C\u56DB\u5B63\u5EA6",
      disabled: false
    }];
    return {
      quarterDate: "",
      quarterOptions: JSON.parse(JSON.stringify(quarterOptions)),
      selectedYear: currentDate.getFullYear(),
      visible: false
    };
  },
  props: type.quarterProps,
  computed: {
    minimumYear() {
      if (this.year) {
        return new Date(this.year).getFullYear();
      }
      return "";
    },
    minimumMonth() {
      if (this.month) {
        return new Date(this.month).getMonth() + 1;
      }
      return "";
    },
    isDisabledReduceYear() {
      return this.minimumYear ? this.minimumYear >= this.selectedYear : false;
    },
    quarterRenderOptions() {
      const currQuarter = this.minimumMonth ? Math.floor(this.minimumMonth % 3 === 0 ? this.minimumMonth / 3 : this.minimumMonth / 3 + 1) : 0;
      const quarter = this.isSelectedCurrentQuarter ? currQuarter - 1 : currQuarter;
      return this.quarterOptions.map((item, index) => {
        const currentYearDsiabledQuarter = this.minimumYear ? this.selectedYear < this.minimumYear || this.selectedYear === this.minimumYear && quarter > index : false;
        return {
          ...item,
          disabled: currentYearDsiabledQuarter
        };
      });
    }
  },
  watch: {
    visible() {
      if (!this.visible) {
        this.$nextTick(() => {
          this.selectedYear = new Date().getFullYear();
        });
      }
    }
  },
  methods: {
    reduceYear() {
      if (!this.isDisabledReduceYear) {
        this.selectedYear--;
      }
    },
    addYear() {
      this.selectedYear++;
    },
    quarterModal(effectDate) {
      if (effectDate) {
        const dateArray = effectDate.split("-");
        const monthVal = dateArray[1][0] === "0" ? Number(dateArray[1][1]) : Number(dateArray[1]);
        const quarterIdx = this.quarterOptions.findIndex((item) => item.months.includes(monthVal));
        this.selectedYear = Number(dateArray[0]);
        this.quarterDate = dateArray[0] + "-" + this.quarterOptions[quarterIdx].key;
      } else {
        if (!this.quarterRenderOptions.some((item) => item.disabled === false)) {
          this.addYear();
        }
      }
    },
    clearInputValue() {
      this.quarterDate = "";
      this.$emit("quarterOK", "");
    },
    handleQuarter(item) {
      const selectMonth = item.months[0].length > 1 ? item.months[0] : "0" + item.months[0];
      this.quarterDate = this.selectedYear + "-" + item.key;
      this.visible = false;
      this.$emit("quarterOK", this.selectedYear + "-" + selectMonth);
    }
  },
  components: {
    [antDesignVue.Popover.name]: antDesignVue.Popover,
    [antDesignVue.Input.name]: antDesignVue.Input,
    [antDesignVue.Icon.name]: antDesignVue.Icon
  }
};
const _hoisted_1 = { slot: "content" };
const _hoisted_2 = { class: "content-year" };
const _hoisted_3 = { class: "quarterBtns" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_icon = vue.resolveComponent("a-icon");
  const _component_a_button = vue.resolveComponent("a-button");
  const _component_a_input = vue.resolveComponent("a-input");
  const _component_a_popover = vue.resolveComponent("a-popover");
  return vue.openBlock(), vue.createBlock(_component_a_popover, {
    modelValue: $data.visible,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.visible = $event),
    placement: "bottomLeft",
    title: "\u9009\u62E9\u5B63\u5EA6\u65E5\u671F",
    trigger: "click",
    overlayClassName: "quarterPickerBox"
  }, {
    default: vue.withCtx(() => [
      vue.createElementVNode("template", _hoisted_1, [
        vue.createElementVNode("div", _hoisted_2, [
          vue.createElementVNode("span", {
            class: vue.normalizeClass($options.isDisabledReduceYear ? "disable" : ""),
            onClick: _cache[0] || (_cache[0] = (...args) => $options.reduceYear && $options.reduceYear(...args))
          }, [
            vue.createVNode(_component_a_icon, { type: "double-left" })
          ], 2),
          vue.createElementVNode("i", null, vue.toDisplayString($data.selectedYear), 1),
          vue.createElementVNode("span", {
            onClick: _cache[1] || (_cache[1] = (...args) => $options.addYear && $options.addYear(...args))
          }, [
            vue.createVNode(_component_a_icon, { type: "double-right" })
          ])
        ]),
        vue.createElementVNode("div", _hoisted_3, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.quarterRenderOptions, (item) => {
            return vue.openBlock(), vue.createBlock(_component_a_button, {
              key: item.key,
              type: "link",
              disabled: item.disabled,
              class: vue.normalizeClass([{
                "quarterLabel": true,
                "quarterActive": $data.quarterDate === $data.selectedYear + "-" + item.key
              }]),
              onClick: ($event) => $options.handleQuarter(item)
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(item.label), 1)
              ]),
              _: 2
            }, 1032, ["disabled", "class", "onClick"]);
          }), 128))
        ])
      ]),
      vue.createVNode(_component_a_input, {
        readOnly: "",
        placeholder: "\u8BF7\u9009\u62E9\u5B63\u5EA6\u751F\u6548\u65E5\u671F",
        modelValue: $data.quarterDate,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.quarterDate = $event),
        modelModifiers: { trim: true },
        onClick: _cache[3] || (_cache[3] = ($event) => $options.quarterModal(_ctx.effectDate)),
        class: vue.normalizeClass({ "has-quarter-value": $data.quarterDate, "quarter-input": true }),
        style: vue.normalizeStyle({ "width": _ctx.inputWidth + "px" })
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_a_icon, {
            class: "clear-icon",
            slot: "suffix",
            type: "close-circle",
            onClick: vue.withModifiers($options.clearInputValue, ["stop"])
          }, null, 8, ["onClick"]),
          vue.createVNode(_component_a_icon, {
            class: "time-icon",
            slot: "suffix",
            type: "calendar"
          })
        ]),
        _: 1
      }, 8, ["modelValue", "class", "style"])
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
const QuarterSelect = /* @__PURE__ */ _pluginVue_exportHelper(_sfc_main, [["render", _sfc_render]]);
module.exports = QuarterSelect;
