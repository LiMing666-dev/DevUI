import Header from './header.ts'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(Header.name as string, Header);
}


export {
    install,
    Header
}


