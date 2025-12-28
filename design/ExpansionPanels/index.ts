import ExpansionPanels from './expansion_panels.ts'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(ExpansionPanels.name as string, ExpansionPanels);
}


export {
    install,
    ExpansionPanels
}


