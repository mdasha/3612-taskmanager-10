const TASK_COUNT = 3;

import {createMenuTemplate} from './components/menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createBoardTemplate} from './components/board.js';
import {createButtonLoadMore} from './components/button-load-more.js';
import {createCardEditTemplate} from './components/card-edition.js';
import {createCardTemplate} from './components/card.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainControlElement = document.querySelector(`.main__control`);
const siteMainElement = document.querySelector(`.main`);

render(siteMainControlElement, createMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardContainer = document.querySelector(`.board__tasks`);

render(boardContainer, createCardEditTemplate(), `beforeend`);

new Array(TASK_COUNT)
  .fill(``)
  .forEach(
      () => render(boardContainer, createCardTemplate(), `beforeend`)
  );

render(boardContainer, createButtonLoadMore(), `beforeend`);
