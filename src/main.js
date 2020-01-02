import SiteMenu from './components/menu.js';
import Filter from './components/filter.js';
import Board from './components/board.js';
import LoadMoreButton from './components/button-load-more.js';
import CardEdition from './components/card-edition.js';
import Card from './components/card.js';
import {generateTasks} from './mock/task.js';
import {generateFilters} from './mock/filter.js';
import {RenderPosition, render} from './utils.js';

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const renderCard = (task) => {
  const cardComponent = new Card(task);
  const cardEditionComponent = new CardEdition(task);

  const editButton = cardComponent.getElement().querySelector(`.card__btn--edit`);
  editButton.addEventListener(`click`, () => {
    taskListElement.replaceChild(cardEditionComponent.getElement(), cardComponent.getElement());
  });

  const editForm = cardEditionComponent.getElement().querySelector(`form`);
  editForm.addEventListener(`click`, () => {
    taskListElement.replaceChild(cardComponent.getElement(), cardEditionComponent.getElement());
  });

  render(taskListElement, cardComponent.getElement(), RenderPosition.BEFOREEND);
};

const siteMainControlElement = document.querySelector(`.main__control`);
const siteMainElement = document.querySelector(`.main`);

render(siteMainControlElement, new SiteMenu().getElement(), RenderPosition.BEFOREEND);

const filters = generateFilters();
render(siteMainElement, new Filter(filters).getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new Board().getElement(), RenderPosition.BEFOREEND);

const taskListElement = document.querySelector(`.board__tasks`);
const tasks = generateTasks(TASK_COUNT);

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

tasks.slice(0, showingTasksCount).forEach((task) => renderCard(task));

const boardElement = siteMainElement.querySelector(`.board`);
render(boardElement, new LoadMoreButton().getElement(), RenderPosition.BEFOREEND);

const loadMoreButtonElement = boardElement.querySelector(`.load-more`);
loadMoreButtonElement.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => renderCard(task));

  if (showingTasksCount >= tasks.length) {
    loadMoreButtonElement.remove();
  }
});
