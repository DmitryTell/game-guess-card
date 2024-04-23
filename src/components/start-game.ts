import { store } from './store';
import { renderApp } from '../render/render-app';

export const selectLevel = (event: MouseEvent) => {
    store.currentLevel = +(event.target as HTMLElement).innerText;
};
