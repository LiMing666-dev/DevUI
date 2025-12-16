import Input from './input.ts'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(Input.name as string, Input);
}


export {
    install,
    Input
}


