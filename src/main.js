import SiteMenuComponent from './components/menu.js';
import FilterController from './controllers/filter.js';
import BoardComponent from './components/board.js';
import {generateTasks} from './mock/task.js';
import {render, RenderPosition} from './utils/render.js';
import BoardController from './controllers/board.js';
import TasksModel from './models/tasks.js';

const TASK_COUNT = 22;

const siteMainControlElement = document.querySelector(`.main__control`);
const siteMainElement = document.querySelector(`.main`);

const siteMenuComponent = new SiteMenuComponent();

siteMenuComponent.getElement().querySelector(`.control__label--new-task`)
  .addEventListener(`click`, () => {
    boardController.createTask();
  });

render(siteMainControlElement, siteMenuComponent, RenderPosition.BEFOREEND);

const tasks = generateTasks(TASK_COUNT);
const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

const filterController = new FilterController(siteMainElement, tasksModel);
filterController.render();

const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);

const boardController = new BoardController(boardComponent, tasksModel);
boardController.render();
