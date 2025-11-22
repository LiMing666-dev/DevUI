import { Button } from '../design/Button/index.ts'
import { Icon } from '../design/Icon/index.ts'
import { OptionsDto } from '../dtos/global.dto.ts'
import { createDevUIThemes } from '../composables/themes.ts'
import { type App } from 'vue'


// Global Styles
import '../css/border.scss'
import '../css/color.scss'
import '../css/size.scss'

const Components = [
    Button,
    Icon
]

const createDevUI = (option: OptionsDto) => {
    const { theme } = option;

    const devUIThemes = createDevUIThemes(theme!);

    const install = (app: App) => {
        Components.forEach(op => {
            app.component(op.name as string, op)
        })
    }

    return {
        install,
        devUIThemes
    }
}

export {
    createDevUI
}