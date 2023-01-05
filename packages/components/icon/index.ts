import _Icon from "./src/icon.vue";
import { withInstall } from "@mniui/utils/withInstall";

const Icon = withInstall(_Icon); // 生成带有 install 方法的组件

export default Icon; // 导出组件
export type { IconProps } from "./src/icon"; // 导出组件 props 的类型

// 这里为了给 volar 用的

declare module "vue" {
    export interface GlobalComponents {MIcon: typeof Icon;}
}
