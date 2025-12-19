import Col from './col.vue'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(Col.name as string, Col);
}


export {
    install,
    Col
}


