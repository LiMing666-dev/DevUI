import CodeEditer from './code_editer.ts'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(CodeEditer.name as string, CodeEditer);
}


export {
    install,
    CodeEditer
}


