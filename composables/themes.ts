import type { OptionsDto } from "../dtos/global.dto.ts";
import { type ThemesDto } from "../dtos/themes.dto.ts"
import { DefaultManage } from './devDefaults.ts'
export const createDevUIThemes = (option: OptionsDto) => {


    const { defaults, theme } = option || {};

    if (defaults) {
        DefaultManage(defaults);
    }







}


// const defaultThemes = (defaultTheme: defaultThemesDto) => {
//     Object.keys(defaultTheme).forEach((component) => {
//         console.log(component)
//     })
// }