import Select from './select.ts'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(Select.name as string, Select);
}


export {
    install,
    Select
}


