import Card from './card.ts'
import { type App } from 'vue';

const install = (app: App) => {
    app.component(Card.name as string, Card);
}


export {
    install,
    Card
}


