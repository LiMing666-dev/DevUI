import Icon from './icon.vue'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(Icon.name as string, Icon);
}


export {
    install,
    Icon
}


