import { Plugin } from "vue";

export type withInstallSFC<T> = T & Plugin;


export function withInstall<T>(comp: T) {
    
    (comp as withInstallSFC<T>).install = function (app) {

        const { name } = comp as unknown as { name: string };
        app.component(name, comp);
    };
    
    return comp as withInstallSFC<T>;
}
