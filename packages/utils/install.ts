import type { App, Plugin } from 'vue'

export type InstallType<T> = T &
    Plugin & {
        displayName: string
        name: string
    }

export const withInstall = <T>(comp: T) => {
    let c = comp as any
    console.log(c)

    c.install = function (app: App) {
        app.component(c.displayName || c.name, c)
    }
    return c as InstallType<T>
}
