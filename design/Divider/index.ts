import Divider from './divider.ts'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(Divider.name as string, Divider);
}


export {
    install,
    Divider
}


