import game_page from '../../templates/game-page.pug';

export const renderGamePage = (store) => {
    return game_page({ store });
};
