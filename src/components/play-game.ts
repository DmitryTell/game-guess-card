import { store } from './store';
import { renderApp } from '../render/render-app';

const finishGame = (status: boolean) => {
    if (status) {
        store.isResetTimer = true;
        store.isFinal = true;
        store.isWon = true;
    } else {
        store.isResetTimer = true;
        store.isFinal = true;
        store.isWon = false;
    }

    renderApp(store, ['game-page', 'timer', 'cards']);
};

const checkCards = () => {
    let isAllOpened = true;

    store.cards.forEach((card) => {
        if (!card.isOpened) {
            isAllOpened = false;
        }
    });

    return isAllOpened;
};

const clickToCard = (index: number) => {
    store.cards[index].isOpened = true;

    renderApp(store, ['cards']);

    if (!store.previousCard) {
        store.previousCard = store.cards[index].name;
        return;
    }

    if (store.previousCard !== store.cards[index].name) {
        finishGame(false);
        return;
    }

    store.previousCard = null;

    if (checkCards()) {
        finishGame(true);
        return;
    }
};

export const playGame = () => {
    const cardElements = document.querySelectorAll('.card');

    cardElements.forEach((element, index) => {
        element.addEventListener('click', () => {
            if (!store.cards[index].isOpened) {
                clickToCard(index);
            }
        });
    });
};
