export default _sfc_main;
declare namespace _sfc_main {
    export const name: string;
    export function data(): {
        quarterDate: string;
        quarterOptions: any;
        selectedYear: number;
        visible: boolean;
    };
    export function data(): {
        quarterDate: string;
        quarterOptions: any;
        selectedYear: number;
        visible: boolean;
    };
    export { quarterProps as props };
    export namespace computed {
        function minimumYear(): any;
        function minimumYear(): any;
        function minimumMonth(): any;
        function minimumMonth(): any;
        function isDisabledReduceYear(): any;
        function isDisabledReduceYear(): any;
        function quarterRenderOptions(): any;
        function quarterRenderOptions(): any;
    }
    export namespace watch {
        function visible(): void;
        function visible(): void;
    }
    export namespace methods {
        function reduceYear(): void;
        function reduceYear(): void;
        function addYear(): void;
        function addYear(): void;
        function quarterModal(effectDate: any): void;
        function quarterModal(effectDate: any): void;
        function clearInputValue(): void;
        function clearInputValue(): void;
        function handleQuarter(item: any): void;
        function handleQuarter(item: any): void;
    }
    export const components: {
        [x: string]: ({
            new (...args: any[]): {
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    visible: boolean;
                    align: import("ant-design-vue/lib/vc-trigger/interface").AlignType;
                    builtinPlacements: import("ant-design-vue/lib/vc-trigger/interface").BuildInPlacements;
                    defaultVisible: boolean;
                    overlayStyle: import("vue").CSSProperties;
                    destroyTooltipOnHide: boolean;
                    autoAdjustOverflow: boolean | import("ant-design-vue/lib/tooltip").AdjustOverflow;
                    arrowPointAtCenter: boolean;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    content: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                    title: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                    trigger: import("vue").PropType<import("ant-design-vue/lib/tooltip/abstractTooltipProps").TriggerType | import("ant-design-vue/lib/tooltip/abstractTooltipProps").TriggerType[]>;
                    visible: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    defaultVisible: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    placement: import("vue").PropType<import("ant-design-vue/lib/tooltip").TooltipPlacement>;
                    color: StringConstructor;
                    transitionName: StringConstructor;
                    overlayStyle: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                        default: import("vue").CSSProperties;
                    };
                    overlayClassName: StringConstructor;
                    openClassName: StringConstructor;
                    prefixCls: StringConstructor;
                    mouseEnterDelay: NumberConstructor;
                    mouseLeaveDelay: NumberConstructor;
                    getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
                    arrowPointAtCenter: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    autoAdjustOverflow: {
                        type: import("vue").PropType<boolean | import("ant-design-vue/lib/tooltip").AdjustOverflow>;
                        default: boolean | import("ant-design-vue/lib/tooltip").AdjustOverflow;
                    };
                    destroyTooltipOnHide: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    align: {
                        type: import("vue").PropType<import("ant-design-vue/lib/vc-trigger/interface").AlignType>;
                        default: import("ant-design-vue/lib/vc-trigger/interface").AlignType;
                    };
                    builtinPlacements: {
                        type: import("vue").PropType<import("ant-design-vue/lib/vc-trigger/interface").BuildInPlacements>;
                        default: import("ant-design-vue/lib/vc-trigger/interface").BuildInPlacements;
                    };
                    children: ArrayConstructor;
                    onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
                    'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
                }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "visible" | "defaultVisible" | "overlayStyle" | "arrowPointAtCenter" | "autoAdjustOverflow" | "destroyTooltipOnHide" | "align" | "builtinPlacements">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    content: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                    title: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                    trigger: import("vue").PropType<import("ant-design-vue/lib/tooltip/abstractTooltipProps").TriggerType | import("ant-design-vue/lib/tooltip/abstractTooltipProps").TriggerType[]>;
                    visible: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    defaultVisible: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    placement: import("vue").PropType<import("ant-design-vue/lib/tooltip").TooltipPlacement>;
                    color: StringConstructor;
                    transitionName: StringConstructor;
                    overlayStyle: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                        default: import("vue").CSSProperties;
                    };
                    overlayClassName: StringConstructor;
                    openClassName: StringConstructor;
                    prefixCls: StringConstructor;
                    mouseEnterDelay: NumberConstructor;
                    mouseLeaveDelay: NumberConstructor;
                    getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
                    arrowPointAtCenter: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    autoAdjustOverflow: {
                        type: import("vue").PropType<boolean | import("ant-design-vue/lib/tooltip").AdjustOverflow>;
                        default: boolean | import("ant-design-vue/lib/tooltip").AdjustOverflow;
                    };
                    destroyTooltipOnHide: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    align: {
                        type: import("vue").PropType<import("ant-design-vue/lib/vc-trigger/interface").AlignType>;
                        default: import("ant-design-vue/lib/vc-trigger/interface").AlignType;
                    };
                    builtinPlacements: {
                        type: import("vue").PropType<import("ant-design-vue/lib/vc-trigger/interface").BuildInPlacements>;
                        default: import("ant-design-vue/lib/vc-trigger/interface").BuildInPlacements;
                    };
                    children: ArrayConstructor;
                    onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
                    'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
                }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                    visible: boolean;
                    align: import("ant-design-vue/lib/vc-trigger/interface").AlignType;
                    builtinPlacements: import("ant-design-vue/lib/vc-trigger/interface").BuildInPlacements;
                    defaultVisible: boolean;
                    overlayStyle: import("vue").CSSProperties;
                    destroyTooltipOnHide: boolean;
                    autoAdjustOverflow: boolean | import("ant-design-vue/lib/tooltip").AdjustOverflow;
                    arrowPointAtCenter: boolean;
                }> & {
                    beforeCreate?: (() => void) | (() => void)[] | undefined;
                    created?: (() => void) | (() => void)[] | undefined;
                    beforeMount?: (() => void) | (() => void)[] | undefined;
                    mounted?: (() => void) | (() => void)[] | undefined;
                    beforeUpdate?: (() => void) | (() => void)[] | undefined;
                    updated?: (() => void) | (() => void)[] | undefined;
                    activated?: (() => void) | (() => void)[] | undefined;
                    deactivated?: (() => void) | (() => void)[] | undefined;
                    beforeDestroy?: (() => void) | (() => void)[] | undefined;
                    beforeUnmount?: (() => void) | (() => void)[] | undefined;
                    destroyed?: (() => void) | (() => void)[] | undefined;
                    unmounted?: (() => void) | (() => void)[] | undefined;
                    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[] | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                content: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                title: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                trigger: import("vue").PropType<import("ant-design-vue/lib/tooltip/abstractTooltipProps").TriggerType | import("ant-design-vue/lib/tooltip/abstractTooltipProps").TriggerType[]>;
                visible: {
                    type: BooleanConstructor;
                    default: any;
                };
                defaultVisible: {
                    type: BooleanConstructor;
                    default: any;
                };
                placement: import("vue").PropType<import("ant-design-vue/lib/tooltip").TooltipPlacement>;
                color: StringConstructor;
                transitionName: StringConstructor;
                overlayStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                    default: import("vue").CSSProperties;
                };
                overlayClassName: StringConstructor;
                openClassName: StringConstructor;
                prefixCls: StringConstructor;
                mouseEnterDelay: NumberConstructor;
                mouseLeaveDelay: NumberConstructor;
                getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
                arrowPointAtCenter: {
                    type: BooleanConstructor;
                    default: any;
                };
                autoAdjustOverflow: {
                    type: import("vue").PropType<boolean | import("ant-design-vue/lib/tooltip").AdjustOverflow>;
                    default: boolean | import("ant-design-vue/lib/tooltip").AdjustOverflow;
                };
                destroyTooltipOnHide: {
                    type: BooleanConstructor;
                    default: any;
                };
                align: {
                    type: import("vue").PropType<import("ant-design-vue/lib/vc-trigger/interface").AlignType>;
                    default: import("ant-design-vue/lib/vc-trigger/interface").AlignType;
                };
                builtinPlacements: {
                    type: import("vue").PropType<import("ant-design-vue/lib/vc-trigger/interface").BuildInPlacements>;
                    default: import("ant-design-vue/lib/vc-trigger/interface").BuildInPlacements;
                };
                children: ArrayConstructor;
                onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
                'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
            }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & import("vue").ComponentCustomProperties;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            content: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
            title: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
            trigger: import("vue").PropType<import("ant-design-vue/lib/tooltip/abstractTooltipProps").TriggerType | import("ant-design-vue/lib/tooltip/abstractTooltipProps").TriggerType[]>;
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            defaultVisible: {
                type: BooleanConstructor;
                default: any;
            };
            placement: import("vue").PropType<import("ant-design-vue/lib/tooltip").TooltipPlacement>;
            color: StringConstructor;
            transitionName: StringConstructor;
            overlayStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            overlayClassName: StringConstructor;
            openClassName: StringConstructor;
            prefixCls: StringConstructor;
            mouseEnterDelay: NumberConstructor;
            mouseLeaveDelay: NumberConstructor;
            getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
            arrowPointAtCenter: {
                type: BooleanConstructor;
                default: any;
            };
            autoAdjustOverflow: {
                type: import("vue").PropType<boolean | import("ant-design-vue/lib/tooltip").AdjustOverflow>;
                default: boolean | import("ant-design-vue/lib/tooltip").AdjustOverflow;
            };
            destroyTooltipOnHide: {
                type: BooleanConstructor;
                default: any;
            };
            align: {
                type: import("vue").PropType<import("ant-design-vue/lib/vc-trigger/interface").AlignType>;
                default: import("ant-design-vue/lib/vc-trigger/interface").AlignType;
            };
            builtinPlacements: {
                type: import("vue").PropType<import("ant-design-vue/lib/vc-trigger/interface").BuildInPlacements>;
                default: import("ant-design-vue/lib/vc-trigger/interface").BuildInPlacements;
            };
            children: ArrayConstructor;
            onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
            'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            visible: boolean;
            align: import("ant-design-vue/lib/vc-trigger/interface").AlignType;
            builtinPlacements: import("ant-design-vue/lib/vc-trigger/interface").BuildInPlacements;
            defaultVisible: boolean;
            overlayStyle: import("vue").CSSProperties;
            destroyTooltipOnHide: boolean;
            autoAdjustOverflow: boolean | import("ant-design-vue/lib/tooltip").AdjustOverflow;
            arrowPointAtCenter: boolean;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin) | ({
            new (...args: any[]): {
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    hidden: boolean;
                    disabled: boolean;
                    value: string | number;
                    type: string;
                    readonly: boolean;
                    autofocus: boolean;
                    loading: boolean;
                    allowClear: boolean;
                    bordered: boolean;
                    lazy: boolean;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    id: StringConstructor;
                    prefixCls: StringConstructor;
                    inputPrefixCls: StringConstructor;
                    defaultValue: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeDef<string | number>;
                    value: {
                        type: import("vue").PropType<string | number>;
                        default: any;
                    };
                    placeholder: {
                        type: import("vue").PropType<string | number>;
                    };
                    autocomplete: StringConstructor;
                    type: {
                        type: import("vue").PropType<string>;
                        default: string;
                    };
                    name: StringConstructor;
                    size: {
                        type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonSize>;
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    readonly: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    addonBefore: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                    addonAfter: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                    prefix: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                    suffix: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                    autofocus: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    allowClear: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    lazy: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    maxlength: NumberConstructor;
                    loading: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    bordered: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showCount: {
                        type: import("vue").PropType<boolean | import("ant-design-vue/lib/input/inputProps").ShowCountProps>;
                    };
                    htmlSize: NumberConstructor;
                    onPressEnter: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                    onKeydown: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                    onKeyup: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                    onFocus: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                    onBlur: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                    onChange: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
                    onInput: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
                    'onUpdate:value': import("vue").PropType<(val: string) => void>;
                    valueModifiers: ObjectConstructor;
                    hidden: BooleanConstructor;
                }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "type" | "value" | "disabled" | "readonly" | "autofocus" | "allowClear" | "lazy" | "loading" | "bordered" | "hidden">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    id: StringConstructor;
                    prefixCls: StringConstructor;
                    inputPrefixCls: StringConstructor;
                    defaultValue: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeDef<string | number>;
                    value: {
                        type: import("vue").PropType<string | number>;
                        default: any;
                    };
                    placeholder: {
                        type: import("vue").PropType<string | number>;
                    };
                    autocomplete: StringConstructor;
                    type: {
                        type: import("vue").PropType<string>;
                        default: string;
                    };
                    name: StringConstructor;
                    size: {
                        type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonSize>;
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    readonly: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    addonBefore: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                    addonAfter: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                    prefix: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                    suffix: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                    autofocus: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    allowClear: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    lazy: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    maxlength: NumberConstructor;
                    loading: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    bordered: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    showCount: {
                        type: import("vue").PropType<boolean | import("ant-design-vue/lib/input/inputProps").ShowCountProps>;
                    };
                    htmlSize: NumberConstructor;
                    onPressEnter: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                    onKeydown: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                    onKeyup: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                    onFocus: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                    onBlur: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                    onChange: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
                    onInput: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
                    'onUpdate:value': import("vue").PropType<(val: string) => void>;
                    valueModifiers: ObjectConstructor;
                    hidden: BooleanConstructor;
                }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                    hidden: boolean;
                    disabled: boolean;
                    value: string | number;
                    type: string;
                    readonly: boolean;
                    autofocus: boolean;
                    loading: boolean;
                    allowClear: boolean;
                    bordered: boolean;
                    lazy: boolean;
                }> & {
                    beforeCreate?: (() => void) | (() => void)[] | undefined;
                    created?: (() => void) | (() => void)[] | undefined;
                    beforeMount?: (() => void) | (() => void)[] | undefined;
                    mounted?: (() => void) | (() => void)[] | undefined;
                    beforeUpdate?: (() => void) | (() => void)[] | undefined;
                    updated?: (() => void) | (() => void)[] | undefined;
                    activated?: (() => void) | (() => void)[] | undefined;
                    deactivated?: (() => void) | (() => void)[] | undefined;
                    beforeDestroy?: (() => void) | (() => void)[] | undefined;
                    beforeUnmount?: (() => void) | (() => void)[] | undefined;
                    destroyed?: (() => void) | (() => void)[] | undefined;
                    unmounted?: (() => void) | (() => void)[] | undefined;
                    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[] | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                id: StringConstructor;
                prefixCls: StringConstructor;
                inputPrefixCls: StringConstructor;
                defaultValue: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeDef<string | number>;
                value: {
                    type: import("vue").PropType<string | number>;
                    default: any;
                };
                placeholder: {
                    type: import("vue").PropType<string | number>;
                };
                autocomplete: StringConstructor;
                type: {
                    type: import("vue").PropType<string>;
                    default: string;
                };
                name: StringConstructor;
                size: {
                    type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonSize>;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                readonly: {
                    type: BooleanConstructor;
                    default: any;
                };
                addonBefore: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                addonAfter: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                prefix: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                suffix: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                autofocus: {
                    type: BooleanConstructor;
                    default: any;
                };
                allowClear: {
                    type: BooleanConstructor;
                    default: any;
                };
                lazy: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maxlength: NumberConstructor;
                loading: {
                    type: BooleanConstructor;
                    default: any;
                };
                bordered: {
                    type: BooleanConstructor;
                    default: any;
                };
                showCount: {
                    type: import("vue").PropType<boolean | import("ant-design-vue/lib/input/inputProps").ShowCountProps>;
                };
                htmlSize: NumberConstructor;
                onPressEnter: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                onKeydown: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                onKeyup: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                onFocus: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                onBlur: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                onChange: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
                onInput: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
                'onUpdate:value': import("vue").PropType<(val: string) => void>;
                valueModifiers: ObjectConstructor;
                hidden: BooleanConstructor;
            }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & import("vue").ComponentCustomProperties;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            id: StringConstructor;
            prefixCls: StringConstructor;
            inputPrefixCls: StringConstructor;
            defaultValue: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeDef<string | number>;
            value: {
                type: import("vue").PropType<string | number>;
                default: any;
            };
            placeholder: {
                type: import("vue").PropType<string | number>;
            };
            autocomplete: StringConstructor;
            type: {
                type: import("vue").PropType<string>;
                default: string;
            };
            name: StringConstructor;
            size: {
                type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonSize>;
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            readonly: {
                type: BooleanConstructor;
                default: any;
            };
            addonBefore: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
            addonAfter: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
            prefix: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
            suffix: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            allowClear: {
                type: BooleanConstructor;
                default: any;
            };
            lazy: {
                type: BooleanConstructor;
                default: boolean;
            };
            maxlength: NumberConstructor;
            loading: {
                type: BooleanConstructor;
                default: any;
            };
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            showCount: {
                type: import("vue").PropType<boolean | import("ant-design-vue/lib/input/inputProps").ShowCountProps>;
            };
            htmlSize: NumberConstructor;
            onPressEnter: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
            onKeydown: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
            onKeyup: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
            onFocus: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
            onBlur: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
            onChange: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
            onInput: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
            'onUpdate:value': import("vue").PropType<(val: string) => void>;
            valueModifiers: ObjectConstructor;
            hidden: BooleanConstructor;
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            hidden: boolean;
            disabled: boolean;
            value: string | number;
            type: string;
            readonly: boolean;
            autofocus: boolean;
            loading: boolean;
            allowClear: boolean;
            bordered: boolean;
            lazy: boolean;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("@vue/runtime-core").Plugin & {
            readonly Group: import("vue").DefineComponent<{
                prefixCls: StringConstructor;
                size: {
                    type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonSize>;
                };
                compact: {
                    type: BooleanConstructor;
                    default: any;
                };
                onMouseenter: {
                    type: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").MouseEventHandler>;
                };
                onMouseleave: {
                    type: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").MouseEventHandler>;
                };
                onFocus: {
                    type: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                };
                onBlur: {
                    type: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                };
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                size: {
                    type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonSize>;
                };
                compact: {
                    type: BooleanConstructor;
                    default: any;
                };
                onMouseenter: {
                    type: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").MouseEventHandler>;
                };
                onMouseleave: {
                    type: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").MouseEventHandler>;
                };
                onFocus: {
                    type: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                };
                onBlur: {
                    type: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                };
            }>>, {
                compact: boolean;
            }>;
            readonly Search: import("vue").DefineComponent<{
                inputPrefixCls: StringConstructor;
                enterButton: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                onSearch: {
                    type: import("vue").PropType<(value: string, event?: import("ant-design-vue/lib/_util/EventInterface").ChangeEvent | MouseEvent | KeyboardEvent | undefined) => void>;
                };
                id: StringConstructor;
                prefixCls: StringConstructor;
                defaultValue: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeDef<string | number>;
                value: {
                    type: import("vue").PropType<string | number>;
                    default: any;
                };
                placeholder: {
                    type: import("vue").PropType<string | number>;
                };
                autocomplete: StringConstructor;
                type: {
                    type: import("vue").PropType<string>;
                    default: string;
                };
                name: StringConstructor;
                size: {
                    type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonSize>;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                readonly: {
                    type: BooleanConstructor;
                    default: any;
                };
                addonBefore: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                addonAfter: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                prefix: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                suffix: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                autofocus: {
                    type: BooleanConstructor;
                    default: any;
                };
                allowClear: {
                    type: BooleanConstructor;
                    default: any;
                };
                lazy: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maxlength: NumberConstructor;
                loading: {
                    type: BooleanConstructor;
                    default: any;
                };
                bordered: {
                    type: BooleanConstructor;
                    default: any;
                };
                showCount: {
                    type: import("vue").PropType<boolean | import("ant-design-vue/lib/input/inputProps").ShowCountProps>;
                };
                htmlSize: NumberConstructor;
                onPressEnter: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                onKeydown: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                onKeyup: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                onFocus: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                onBlur: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                onChange: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
                onInput: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
                'onUpdate:value': import("vue").PropType<(val: string) => void>;
                valueModifiers: ObjectConstructor;
                hidden: BooleanConstructor;
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                inputPrefixCls: StringConstructor;
                enterButton: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                onSearch: {
                    type: import("vue").PropType<(value: string, event?: import("ant-design-vue/lib/_util/EventInterface").ChangeEvent | MouseEvent | KeyboardEvent | undefined) => void>;
                };
                id: StringConstructor;
                prefixCls: StringConstructor;
                defaultValue: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeDef<string | number>;
                value: {
                    type: import("vue").PropType<string | number>;
                    default: any;
                };
                placeholder: {
                    type: import("vue").PropType<string | number>;
                };
                autocomplete: StringConstructor;
                type: {
                    type: import("vue").PropType<string>;
                    default: string;
                };
                name: StringConstructor;
                size: {
                    type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonSize>;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                readonly: {
                    type: BooleanConstructor;
                    default: any;
                };
                addonBefore: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                addonAfter: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                prefix: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                suffix: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                autofocus: {
                    type: BooleanConstructor;
                    default: any;
                };
                allowClear: {
                    type: BooleanConstructor;
                    default: any;
                };
                lazy: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maxlength: NumberConstructor;
                loading: {
                    type: BooleanConstructor;
                    default: any;
                };
                bordered: {
                    type: BooleanConstructor;
                    default: any;
                };
                showCount: {
                    type: import("vue").PropType<boolean | import("ant-design-vue/lib/input/inputProps").ShowCountProps>;
                };
                htmlSize: NumberConstructor;
                onPressEnter: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                onKeydown: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                onKeyup: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                onFocus: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                onBlur: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                onChange: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
                onInput: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
                'onUpdate:value': import("vue").PropType<(val: string) => void>;
                valueModifiers: ObjectConstructor;
                hidden: BooleanConstructor;
            }>>, {
                hidden: boolean;
                disabled: boolean;
                value: string | number;
                type: string;
                readonly: boolean;
                autofocus: boolean;
                loading: boolean;
                allowClear: boolean;
                bordered: boolean;
                lazy: boolean;
            }>;
            readonly TextArea: import("vue").DefineComponent<{
                rows: NumberConstructor;
                autosize: {
                    type: import("vue").PropType<boolean | import("ant-design-vue/lib/input/inputProps").AutoSizeType>;
                    default: any;
                };
                autoSize: {
                    type: import("vue").PropType<boolean | import("ant-design-vue/lib/input/inputProps").AutoSizeType>;
                    default: any;
                };
                onResize: {
                    type: import("vue").PropType<(size: {
                        width: number;
                        height: number;
                    }) => void>;
                };
                onCompositionstart: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").CompositionEventHandler>;
                onCompositionend: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").CompositionEventHandler>;
                valueModifiers: ObjectConstructor;
                onFocus: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                onBlur: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                onChange: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
                onInput: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
                onKeydown: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                onKeyup: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                hidden: BooleanConstructor;
                prefixCls: StringConstructor;
                size: {
                    type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonSize>;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                value: {
                    type: import("vue").PropType<string | number>;
                    default: any;
                };
                name: StringConstructor;
                type: {
                    type: import("vue").PropType<string>;
                    default: string;
                };
                id: StringConstructor;
                readonly: {
                    type: BooleanConstructor;
                    default: any;
                };
                autofocus: {
                    type: BooleanConstructor;
                    default: any;
                };
                defaultValue: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeDef<string | number>;
                'onUpdate:value': import("vue").PropType<(val: string) => void>;
                autocomplete: StringConstructor;
                placeholder: {
                    type: import("vue").PropType<string | number>;
                };
                loading: {
                    type: BooleanConstructor;
                    default: any;
                };
                allowClear: {
                    type: BooleanConstructor;
                    default: any;
                };
                bordered: {
                    type: BooleanConstructor;
                    default: any;
                };
                inputPrefixCls: StringConstructor;
                lazy: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maxlength: NumberConstructor;
                showCount: {
                    type: import("vue").PropType<boolean | import("ant-design-vue/lib/input/inputProps").ShowCountProps>;
                };
                htmlSize: NumberConstructor;
                onPressEnter: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                rows: NumberConstructor;
                autosize: {
                    type: import("vue").PropType<boolean | import("ant-design-vue/lib/input/inputProps").AutoSizeType>;
                    default: any;
                };
                autoSize: {
                    type: import("vue").PropType<boolean | import("ant-design-vue/lib/input/inputProps").AutoSizeType>;
                    default: any;
                };
                onResize: {
                    type: import("vue").PropType<(size: {
                        width: number;
                        height: number;
                    }) => void>;
                };
                onCompositionstart: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").CompositionEventHandler>;
                onCompositionend: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").CompositionEventHandler>;
                valueModifiers: ObjectConstructor;
                onFocus: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                onBlur: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                onChange: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
                onInput: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
                onKeydown: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                onKeyup: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                hidden: BooleanConstructor;
                prefixCls: StringConstructor;
                size: {
                    type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonSize>;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                value: {
                    type: import("vue").PropType<string | number>;
                    default: any;
                };
                name: StringConstructor;
                type: {
                    type: import("vue").PropType<string>;
                    default: string;
                };
                id: StringConstructor;
                readonly: {
                    type: BooleanConstructor;
                    default: any;
                };
                autofocus: {
                    type: BooleanConstructor;
                    default: any;
                };
                defaultValue: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeDef<string | number>;
                'onUpdate:value': import("vue").PropType<(val: string) => void>;
                autocomplete: StringConstructor;
                placeholder: {
                    type: import("vue").PropType<string | number>;
                };
                loading: {
                    type: BooleanConstructor;
                    default: any;
                };
                allowClear: {
                    type: BooleanConstructor;
                    default: any;
                };
                bordered: {
                    type: BooleanConstructor;
                    default: any;
                };
                inputPrefixCls: StringConstructor;
                lazy: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maxlength: NumberConstructor;
                showCount: {
                    type: import("vue").PropType<boolean | import("ant-design-vue/lib/input/inputProps").ShowCountProps>;
                };
                htmlSize: NumberConstructor;
                onPressEnter: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
            }>>, {
                hidden: boolean;
                disabled: boolean;
                value: string | number;
                type: string;
                readonly: boolean;
                autofocus: boolean;
                loading: boolean;
                allowClear: boolean;
                bordered: boolean;
                lazy: boolean;
                autosize: any;
                autoSize: any;
            }>;
            readonly Password: import("vue").DefineComponent<{
                prefixCls: StringConstructor;
                inputPrefixCls: StringConstructor;
                action: {
                    type: StringConstructor;
                    default: string;
                };
                visibilityToggle: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                iconRender: FunctionConstructor;
                id: StringConstructor;
                defaultValue: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeDef<string | number>;
                value: {
                    type: import("vue").PropType<string | number>;
                    default: any;
                };
                placeholder: {
                    type: import("vue").PropType<string | number>;
                };
                autocomplete: StringConstructor;
                type: {
                    type: import("vue").PropType<string>;
                    default: string;
                };
                name: StringConstructor;
                size: {
                    type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonSize>;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                readonly: {
                    type: BooleanConstructor;
                    default: any;
                };
                addonBefore: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                addonAfter: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                prefix: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                suffix: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                autofocus: {
                    type: BooleanConstructor;
                    default: any;
                };
                allowClear: {
                    type: BooleanConstructor;
                    default: any;
                };
                lazy: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maxlength: NumberConstructor;
                loading: {
                    type: BooleanConstructor;
                    default: any;
                };
                bordered: {
                    type: BooleanConstructor;
                    default: any;
                };
                showCount: {
                    type: import("vue").PropType<boolean | import("ant-design-vue/lib/input/inputProps").ShowCountProps>;
                };
                htmlSize: NumberConstructor;
                onPressEnter: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                onKeydown: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                onKeyup: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                onFocus: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                onBlur: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                onChange: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
                onInput: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
                'onUpdate:value': import("vue").PropType<(val: string) => void>;
                valueModifiers: ObjectConstructor;
                hidden: BooleanConstructor;
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                inputPrefixCls: StringConstructor;
                action: {
                    type: StringConstructor;
                    default: string;
                };
                visibilityToggle: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                iconRender: FunctionConstructor;
                id: StringConstructor;
                defaultValue: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeDef<string | number>;
                value: {
                    type: import("vue").PropType<string | number>;
                    default: any;
                };
                placeholder: {
                    type: import("vue").PropType<string | number>;
                };
                autocomplete: StringConstructor;
                type: {
                    type: import("vue").PropType<string>;
                    default: string;
                };
                name: StringConstructor;
                size: {
                    type: import("vue").PropType<import("ant-design-vue/lib/button").ButtonSize>;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                readonly: {
                    type: BooleanConstructor;
                    default: any;
                };
                addonBefore: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                addonAfter: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                prefix: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                suffix: import(".pnpm/vue-types@3.0.2/node_modules/vue-types").VueTypeValidableDef<any>;
                autofocus: {
                    type: BooleanConstructor;
                    default: any;
                };
                allowClear: {
                    type: BooleanConstructor;
                    default: any;
                };
                lazy: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maxlength: NumberConstructor;
                loading: {
                    type: BooleanConstructor;
                    default: any;
                };
                bordered: {
                    type: BooleanConstructor;
                    default: any;
                };
                showCount: {
                    type: import("vue").PropType<boolean | import("ant-design-vue/lib/input/inputProps").ShowCountProps>;
                };
                htmlSize: NumberConstructor;
                onPressEnter: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                onKeydown: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                onKeyup: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").KeyboardEventHandler>;
                onFocus: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                onBlur: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").FocusEventHandler>;
                onChange: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
                onInput: import("vue").PropType<import("ant-design-vue/lib/_util/EventInterface").ChangeEventHandler>;
                'onUpdate:value': import("vue").PropType<(val: string) => void>;
                valueModifiers: ObjectConstructor;
                hidden: BooleanConstructor;
            }>>, {
                hidden: boolean;
                disabled: boolean;
                value: string | number;
                type: string;
                action: string;
                readonly: boolean;
                autofocus: boolean;
                loading: boolean;
                allowClear: boolean;
                bordered: boolean;
                lazy: boolean;
                visibilityToggle: boolean;
            }>;
        });
        [x: number]: any;
    };
}
import { quarterProps } from "./type";
