import Main from './main.ts'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(Main.name as string, Main);
}


export {
    install,
    Main
}


