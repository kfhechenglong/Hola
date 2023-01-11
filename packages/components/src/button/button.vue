<template>
  <button class="hcl-button" :class="styleClass">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { buttonProps } from './type'
export default defineComponent({
    name: 'hcl-button',
    props: buttonProps,
    setup(props) {
        const styleClass = computed(() => {
            return {
                [`hcl-button--${props.type}`]: props.type
            }
        })
        return {
            styleClass
        }
    }
})
</script>
<style lang="less">
.hcl-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.hcl-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}

.hcl-button--text {
  border-color: transparent;
  color: #409eff;
  background: transparent;
  padding-left: 0;
  padding-right: 0;

  &:hover {
    color: #66b1ff;
    border-color: transparent;
    background-color: transparent;
  }
}
</style>
