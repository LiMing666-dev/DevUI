import dome from './dome.vue'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(dome.name as string, dome);
}


export {
    install,
    dome
}


