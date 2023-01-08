import type { ExtractPropTypes, PropType } from "vue";

export const buttonProps = {
    size: [Number, String] as PropType<number | string>,
    color: String,
    type: String,
    disabled:Boolean,
    backgroundColor:String
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
