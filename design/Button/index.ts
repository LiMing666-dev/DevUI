import Button from './button.ts'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(Button.name as string, Button);
}


export {
    install,
    Button
}


