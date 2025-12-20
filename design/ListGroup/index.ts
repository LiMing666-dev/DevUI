import ListGroup from './list_group.ts'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(ListGroup.name as string, ListGroup);
}


export {
    install,
    ListGroup
}


