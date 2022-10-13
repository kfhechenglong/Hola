import {ExtractPropTypes} from "vue";
export const ButtonType = ['primary', 'success', 'info', 'warning', 'danger','text'];
// 定义按钮类型
export const buttonProps = {
    type: {
        type: String,
        validator(value: string){
            return ButtonType.includes(value)
        }
    }
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>