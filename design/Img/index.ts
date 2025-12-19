import Img from './img.ts'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(Img.name as string, Img);
}


export {
    install,
    Img
}


