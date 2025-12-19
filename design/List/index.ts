import List from './list.ts'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(List.name as string, List);
}


export {
    install,
    List
}


