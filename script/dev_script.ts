import { Button } from '../design/Button/index.ts'
import { Icon } from '../design/Icon/index.ts'
import { Input } from '../design/Input/index.ts'
import { Form } from '../design/Form/index.ts'
import { Row } from '../design/Row/index.ts'
import { Col } from '../design/Col/index.ts'
import { Dialog } from '../design/Dialog/index.ts'
import { Container } from '../design/Container/index.ts'
import { DApp } from '../design/App/index.ts'
import { Header } from '../design/Header/index.ts'
import { Img } from '../design/Img/index.ts'
import { Main } from '../design/Main/index.ts'
import { Menu } from '../design/Menu/index.ts'
import { List } from '../design/List/index.ts'
import { ListItem } from '../design/ListItem/index.ts'
import { Chip } from '../design/Chip/index.ts'
import { Drawer } from '../design/Drawer/index.ts'
import { ListGroup } from '../design/ListGroup/index.ts'
import { Card } from '../design/Card/index.ts'
import { CodeEditer } from '../design/CodeEditer/index.ts'
import { Divider } from '../design/Divider/index.ts'
import { ExpansionPanels } from '../design/ExpansionPanels/index.ts'
import { ExpansionPanel } from '../design/ExpansionPanel/index.ts'
import { Select } from '../design/Select/index.ts'
import { OptionsDto } from '../dtos/global.dto.ts'
import { createDevUIThemes } from '../composables/themes.ts'
import { type App } from 'vue'


// Global Styles
import '../css/border.scss'
import '../css/color.scss'
import '../css/size.scss'

const Components = [
    Container,
    Button,
    Icon,
    Input,
    Form,
    Col,
    Row,
    Dialog,
    DApp,
    Header,
    Img,
    Main,
    Menu,
    List,
    ListItem,
    Chip,
    Drawer,
    ListGroup,
    Card,
    CodeEditer,
    Divider,
    ExpansionPanels,
    ExpansionPanel,
    Select
]

const createDevUI = (option: OptionsDto) => {

    // 统一分发UI 配置管理 
    const devUIThemes = createDevUIThemes(option);

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