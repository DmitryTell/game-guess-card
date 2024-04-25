import { IStore } from '../interface/store';
import { addZeroBefore } from '../utils/add-zero-before';

export const store: IStore = {
    levels: [1, 2, 3],
    currentLevel: null,
    cards: [],
    minutes: addZeroBefore(0),
    seconds: addZeroBefore(5),
    isResetTimer: false,
    previousCard: null,
    isFinal: false,
    isWon: null,
};
