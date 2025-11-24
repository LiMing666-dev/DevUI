
import { type ThemesDto } from './themes.dto.ts';
import { type defaultThemesDto } from './default.dto.ts'
export class OptionsDto {
    theme?: ThemesDto
    defaults?: defaultThemesDto;
}

