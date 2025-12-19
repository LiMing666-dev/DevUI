import Drawer from './drawer.ts'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(Drawer.name as string, Drawer);
}


export {
    install,
    Drawer
}


