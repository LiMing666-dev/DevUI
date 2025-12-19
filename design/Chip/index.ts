import Chip from './chip.ts'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(Chip.name as string, Chip);
}


export {
    install,
    Chip
}


