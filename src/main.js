import SiteMenuComponent from './components/menu.js';
import FilterComponent from './components/filter.js';
import BoardComponent from './components/board.js';
import LoadMoreButtonComponent from './components/button-load-more.js';
import CardEditionComponent from './components/card-edition.js';
import CardComponent from './components/card.js';
import CardsComponent from './components/cards.js';
import SortComponent from './components/sort.js';
import NoTasksComponent from './components/no-tasks.js';
import {generateTasks} from './mock/task.js';
import {generateFilters} from './mock/filter.js';
import {RenderPosition, render} from './utils.js';

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const renderCard = (taskListElement, task) => {
  const onEscKeyDown = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      replaceEditToTask();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const replaceEditToTask = () => {
    taskListElement.replaceChild(cardComponent.getElement(), cardEditionComponent.getElement());
  };

  const replaceTaskToEdit = () => {
    taskListElement.replaceChild(cardEditionComponent.getElement(), cardComponent.getElement());
  };

  const cardComponent = new CardComponent(task);
  const editButton = cardComponent.getElement().querySelector(`.card__btn--edit`);

  editButton.addEventListener(`click`, () => {
    replaceTaskToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  const cardEditionComponent = new CardEditionComponent(task);
  const editForm = cardEditionComponent.getElement().querySelector(`form`);

  editForm.addEventListener(`submit`, replaceEditToTask);

  render(taskListElement, cardComponent.getElement(), RenderPosition.BEFOREEND);
};

const siteMainControlElement = document.querySelector(`.main__control`);
const siteMainElement = document.querySelector(`.main`);

render(siteMainControlElement, new SiteMenuComponent().getElement(), RenderPosition.BEFOREEND);

const filters = generateFilters();

render(siteMainElement, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent.getElement(), RenderPosition.BEFOREEND);

const tasks = generateTasks(TASK_COUNT);
const isAllTasksArchived = tasks.every(((task) => task.isArchive));

if (isAllTasksArchived) {
  render(boardComponent.getElement(), new NoTasksComponent().getElement(), RenderPosition.BEFOREEND);
} else {
  render(boardComponent.getElement(), new SortComponent().getElement(), RenderPosition.BEFOREEND);
  render(boardComponent.getElement(), new CardsComponent().getElement(), RenderPosition.BEFOREEND);
}

const taskListElement = boardComponent.getElement().querySelector(`.board__tasks`);

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

tasks.slice(0, showingTasksCount).forEach((task) => renderCard(taskListElement, task));

const boardElement = siteMainElement.querySelector(`.board`);
const loadMoreButtonComponent = new LoadMoreButtonComponent();

render(boardElement, loadMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

const loadMoreButtonElement = boardElement.querySelector(`.load-more`);

loadMoreButtonElement.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => renderCard(taskListElement, task));

  if (showingTasksCount >= tasks.length) {
    loadMoreButtonComponent.getElement().remove();
    loadMoreButtonComponent.removeElement();
  }
});
