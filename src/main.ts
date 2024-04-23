import './css/main.css';
import { store } from './components/store';
import { renderApp } from './render/render-app';

renderApp(store, ['first-page']);
