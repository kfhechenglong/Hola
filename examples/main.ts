import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './app.vue'
// 挂载app
createApp(App).use(Antd).mount('#app')