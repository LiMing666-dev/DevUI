import Row from './row.vue'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(Row.name as string, Row);
}


export {
    install,
    Row
}


