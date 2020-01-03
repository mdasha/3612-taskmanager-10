import SiteMenuComponent from './components/menu.js';
import FilterComponent from './components/filter.js';
import BoardComponent from './components/board.js';
import {generateTasks} from './mock/task.js';
import {generateFilters} from './mock/filter.js';
import {render, RenderPosition} from './utils/render.js';
import BoardController from "./controllers/board";

const TASK_COUNT = 22;

const siteMainControlElement = document.querySelector(`.main__control`);
const siteMainElement = document.querySelector(`.main`);

render(siteMainControlElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);

const filters = generateFilters();

render(siteMainElement, new FilterComponent(filters), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);

const tasks = generateTasks(TASK_COUNT);

const boardController = new BoardController(boardComponent);
boardController.render(tasks);
