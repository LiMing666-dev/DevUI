import Menu from './menu.ts'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(Menu.name as string, Menu);
}


export {
    install,
    Menu
}


