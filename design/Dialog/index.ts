import Dialog from './dialog.vue'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(Dialog.name as string, Dialog);
}


export {
    install,
    Dialog
}


