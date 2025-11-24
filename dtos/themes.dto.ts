
import { type ButtonDto } from "../design/Button/button.dto.ts";

type themes = 'light' | 'dark' | 'system';

export interface ThemesDto {
    global?: {

    };
    theme?: {
        defaultTheme?: themes;
        themes?: {
            light?: ThemeDto;
            dark?: ThemeDto
            system?: ThemeDto
        };
    }

}



interface ThemeDto {
    colors?: {
        background?: string,
        surface?: string,
        'surface-bright'?: string,
        'surface-light'?: string,
        'surface-variant'?: string,
        'on-surface-variant'?: string,
        primary?: string,
        'primary-darken-1'?: string,
        secondary?: string,
        'secondary-darken-1'?: string,
        error?: string,
        info?: string,
        success?: string,
        warning?: string,
    }
}