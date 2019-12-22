import {createMenuTemplate} from './components/menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createBoardTemplate} from './components/board.js';
import {createButtonLoadMore} from './components/button-load-more.js';
import {createCardEditTemplate} from './components/card-edition.js';
import {createCardTemplate} from './components/card.js';
import {generateTasks} from './mock/task.js';
import {generateFilters} from './mock/filter.js';

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const siteMainControlElement = document.querySelector(`.main__control`);
const siteMainElement = document.querySelector(`.main`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(siteMainControlElement, createMenuTemplate(), `beforeend`);

const filters = generateFilters();
render(siteMainElement, createFilterTemplate(filters), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const taskListElement = document.querySelector(`.board__tasks`);
const tasks = generateTasks(TASK_COUNT);

render(taskListElement, createCardEditTemplate(tasks[0]), `beforeend`);
let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

tasks.slice(1, showingTasksCount).forEach((task) => render(taskListElement, createCardTemplate(task), `beforeend`));

const boardElement = siteMainElement.querySelector(`.board`);
render(boardElement, createButtonLoadMore(), `beforeend`);

const loadMoreButtonElement = boardElement.querySelector(`.load-more`);
loadMoreButtonElement.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => render(taskListElement, createCardTemplate(task), `beforeend`));

  if (showingTasksCount >= tasks.length) {
    loadMoreButtonElement.remove();
  }
});
