import { IStore } from '../interface/store';
import renderCore from './render-core';
import { handlers } from '../utils/handlers';

export const renderApp = (store: IStore, components: string[]): void => {
    const appElement = document.getElementById('app');

    components.forEach((component) => {
        renderCore[component](store, appElement);
    });

    const clickableElements = document.querySelectorAll('[\\@click]');

    clickableElements.forEach((element) => {
        const handlerName = element.getAttribute('@click');

        element.addEventListener('click', (event: MouseEvent) => {
            handlers[handlerName](event);
        });
    });
};
