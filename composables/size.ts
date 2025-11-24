export const updateSize = (_dom: HTMLElement, size: string, component: string) => {
    _dom.classList.toggle(`${component}-size-${size}`);
}