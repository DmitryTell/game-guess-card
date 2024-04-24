import cards from '../../templates/cards.pug';

export const renderCards = (store) => {
    return cards({ store });
};
