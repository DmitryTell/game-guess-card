import { ICard } from './card';

export interface IStore {
    levels: number[];
    currentLevel: null | number;
    cards: ICard[];
    minutes: string;
    seconds: string;
    isResetTimer: boolean;
    isFinal: boolean;
    isWon: null | boolean;
}
