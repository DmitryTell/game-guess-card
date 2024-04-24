import { IStore } from '../interface/store';
import { renderFirstPage } from './functions/render-first-page';
import { renderGamePage } from './functions/render-game-page';
import { renderTimer } from './functions/render-timer';
import { renderCards } from './functions/render-cards';

interface IRenderCore {
    [key: string]: (store: IStore, appElement: HTMLElement) => void;
}

const renderCore: IRenderCore = {
    'first-page': (store: IStore, appElement: HTMLElement) => {
        appElement.innerHTML = renderFirstPage(store);
    },
    'game-page': (store: IStore, appElement: HTMLElement) => {
        appElement.innerHTML = renderGamePage();
    },
    'timer': (store: IStore, appElement: HTMLElement) => {
        const timerElement = document.getElementById('timer');
        
        if (timerElement) {
            timerElement.innerHTML = renderTimer(store);
        }
    },
    'cards': (store: IStore, appElement: HTMLElement) => {
        const cardsElement = document.getElementById('cards');
        
        if (cardsElement) {
            cardsElement.innerHTML = renderCards(store);
        }
    },
};

export default renderCore;
