import Container from './container.ts'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(Container.name as string, Container);
}


export {
    install,
    Container
}


