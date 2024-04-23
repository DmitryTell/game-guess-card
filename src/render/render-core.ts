import { IStore } from '../interface/store';
import { renderFirstPage } from './functions/render-first-page';

interface IRenderCore {
    [key: string]: (store: IStore, appElement: HTMLElement) => void;
}

const renderCore: IRenderCore = {
    'first-page': (store: IStore, appElement: HTMLElement) => {
        appElement.innerHTML = renderFirstPage(store);
    },
};

export default renderCore;
