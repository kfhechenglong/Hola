import type { App, Plugin } from 'vue'

export type InstallType<T> = T &
    Plugin & {
        displayName: string
        name: string
    }

export const withInstall = <T>(comp: T) => {
    const c = comp as any
    c.install = function (app: App) {
        app.component(c.displayName || c.name, c)
    }
    return c as InstallType<T>
}
