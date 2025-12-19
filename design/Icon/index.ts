import Icon from './icon.ts'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(Icon.name as string, Icon);
}


export {
    install,
    Icon
}


