import type { ExtractPropTypes, PropType } from "vue";

export const layoutProps = {
    size: [Number, String] as PropType<number | string>,
    color: String,
} as const;

export type LayoutProps = ExtractPropTypes<typeof layoutProps>;
