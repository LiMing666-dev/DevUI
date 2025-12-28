import ExpansionPanel from './expansion_panel.ts'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(ExpansionPanel.name as string, ExpansionPanel);
}


export {
    install,
    ExpansionPanel
}


