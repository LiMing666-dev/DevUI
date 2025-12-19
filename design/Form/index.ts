import Form from './form.vue'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(Form.name as string, Form);
}


export {
    install,
    Form
}


