import ListItem from './list_item.ts'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(ListItem.name as string, ListItem);
}


export {
    install,
    ListItem
}


