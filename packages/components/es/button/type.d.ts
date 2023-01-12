import { ExtractPropTypes } from 'vue';
export declare const ButtonType: string[];
export declare const buttonProps: {
    type: {
        type: StringConstructor;
        validator(value: string): boolean;
    };
};
export declare type ButtonProps = ExtractPropTypes<typeof buttonProps>;
