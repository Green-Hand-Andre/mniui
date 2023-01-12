import _Layout from "./src/layout.vue";
import { withInstall } from "@mniui/utils/withInstall";

const Layout = withInstall(_Layout); // 生成带有 install 方法的组件

export default Layout; // 导出组件
export type { LayoutProps } from "./src/layout"; // 导出组件 props 的类型

// 这里为了给 volar 用的

declare module "vue" {
    export interface GlobalComponents {MLayout: typeof Layout;}
}
