import { store } from './store';
import { getNewDeck } from '../utils/get-new-deck';
import { cards } from './cards';
import { renderApp } from '../render/render-app';
import {
    startCountdown,
    restartTimer,
} from './start-timers';

export const selectLevel = (event: MouseEvent) => {
    store.currentLevel = +(event.target as HTMLElement).innerText;
};

export const initStartGame = () => {
    if (store.currentLevel) {
        store.cards = getNewDeck(cards, store);
        store.cards.map((card) => {
            card.isOpened = true;
        });
        store.isResetTimer = false;

        renderApp(store, ['game-page', 'timer', 'cards']);
        startCountdown();
    }
};

export const initRestartGame = () => {
    store.currentLevel = null;
    store.isResetTimer = true;

    renderApp(store, ['first-page']);
    restartTimer();
};
