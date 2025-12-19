import DApp from './app.vue'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(DApp.name as string, DApp);
}


export {
    install,
    DApp
}


