import type { Plugin } from 'vue';
export declare type InstallType<T> = T & Plugin & {
    displayName: string;
    name: string;
};
export declare const withInstall: <T>(comp: T) => InstallType<T>;
