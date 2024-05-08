import { store } from './store';
import { renderApp } from '../render/render-app';
import { addZeroBefore } from '../utils/add-zero-before';

const startGameTimer = () => {
    let minutes = 0;
    let seconds = 0;

    store.cards.map((card) => {
        card.isOpened = false;
    });

    renderApp(store, ['cards']);

    const gameTimerInterval = setInterval(() => {
        if (store.isResetTimer) {
            clearInterval(gameTimerInterval);
            return;
        }

        if (seconds === 59) {
            seconds = 0;
            minutes++;
        } else {
            seconds++;
        }

        store.minutes = addZeroBefore(minutes);
        store.seconds = addZeroBefore(seconds);

        renderApp(store, ['timer']);
    }, 1000);
};

export const startCountdown = () => {
    let seconds = 5 * store.currentLevel;

    store.seconds = addZeroBefore(seconds);

    renderApp(store, ['timer']);

    const countdownInterval = setInterval(() => {
        if (store.isResetTimer) {
            clearInterval(countdownInterval);
            return;
        }

        if (seconds === 0) {
            clearInterval(countdownInterval);

            startGameTimer();
        } else {
            seconds--;

            store.seconds = addZeroBefore(seconds);

            renderApp(store, ['timer']);
        }
    }, 1000);
};

export const restartTimer = () => {
    store.minutes = addZeroBefore(0);
    store.seconds = addZeroBefore(5);
};
