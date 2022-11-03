// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
console.log(DefaultTheme)
import { Button } from './../../../packages/components/index'
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    // DefaultTheme.enhanceApp(ctx)

    // register your custom global components
    ctx.app.component('EleButton', Button)
  }
}
