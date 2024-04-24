import { selectLevel, initStartGame, initRestartGame } from '../components/start-game';

interface IHandlers {
    [key: string]: (event: MouseEvent) => void;
}

export const handlers: IHandlers = {
    click_to_level: selectLevel,
    click_to_start: initStartGame,
    click_to_restart: initRestartGame,
};
