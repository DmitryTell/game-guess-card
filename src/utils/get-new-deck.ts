import { IStore } from '../interface/store';
import { ICard } from '../interface/card';

const getNewRandomIndex = (max: number): number => Math.round(Math.random() * max);

export const getNewDeck = (cards: ICard[], store: IStore): ICard[] => {
    const firstDeck: ICard[] = [...cards];
    const secondDeck: ICard[] = [...cards];
    const result: ICard[] = [];

    for (let i = 0; i < store.currentLevel * 3; i++) {
        const index = getNewRandomIndex(firstDeck.length);

        result.push(firstDeck[index]);
        result.push(secondDeck[index]);
        firstDeck.splice(index, 1);
        secondDeck.splice(index, 1);
    }

    return result.sort(() => Math.random() - 0.5);
};
