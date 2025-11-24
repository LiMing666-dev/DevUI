import { ButtonDefault } from '../design/Button';
import { type defaultThemesDto } from '../dtos/default.dto'


// 组件默认配置方法集合
const defautlDesings = {
    DButton: ButtonDefault
}


// 获取默认配置并分发
export const DefaultManage = (_default: defaultThemesDto) => {
    Object.keys(_default).forEach((component: any) => {
        const key = component as keyof defaultThemesDto;
        defautlDesings[key](_default[key]!);
    })
}



