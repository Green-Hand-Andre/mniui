import _Button from "./src/button.vue";
import { withInstall } from "@mniui/utils/withInstall";

const Button = withInstall(_Button); // 生成带有 install 方法的组件

export default Button; // 导出组件
export type { ButtonProps } from "./src/button"; // 导出组件 props 的类型

// 这里为了给 volar 用的

declare module "vue" {
    export interface GlobalComponents {MButton: typeof Button;}
}
