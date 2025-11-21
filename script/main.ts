import { createApp } from 'vue'
import './style.css'
import App from '../App.vue'
import { createDevUI } from './dev_script.ts'

import '../composables/color.ts'

// 暂时使用mdi 图标组件库
import '@mdi/font/css/materialdesignicons.min.css'

// Test Router 
import router from '../test/router/index.ts'
const devUI = createDevUI({})
createApp(App).use(devUI).use(router).mount('#app')
