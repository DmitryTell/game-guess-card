import { IStore } from '../interface/store';
import { ICard } from '../interface/card';

const getNewRandomIndex = (max: number): number => Math.round(Math.random() * max);

export const getNewDeck = (firstDeck: ICard[], secondDeck: ICard[], store: IStore): ICard[] => {
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
