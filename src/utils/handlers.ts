import { selectLevel } from '../components/start-game';

interface IHandlers {
    [key: string]: (event: MouseEvent) => void;
}

export const handlers: IHandlers = {
    click_to_level: selectLevel,
};
