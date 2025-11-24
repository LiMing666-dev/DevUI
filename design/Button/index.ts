import type { ButtonDto } from './button.dto.ts';
import Button from './button.ts'
import { ref, type App, nextTick, reactive } from 'vue';
import { updateSize } from '../../composables/size.ts';

const BtnRef = ref<HTMLElement | null>(null);

const install = (app: App) => {
    app.component(Button.name as string, Button);
}


// 设置注入默认值
let buttonAttribute = reactive<ButtonDto>({

})

const ButtonDefault = (_button: ButtonDto) => {
    if (_button.size) {
        buttonAttribute.size = _button.size
    }
}


export const ButtonSize = () => { }






export {
    install,
    buttonAttribute,
    Button,
    BtnRef,
    ButtonDefault
}


