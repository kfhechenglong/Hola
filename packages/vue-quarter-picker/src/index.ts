import { App } from 'vue';
import QuarterSelect from './vue-quarter-picker.vue'
import "./style.scss";
export {
    QuarterSelect
}
export default {
    install(app: App) {
        app.component('QuarterSelect', QuarterSelect);
    }
}