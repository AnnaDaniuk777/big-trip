import FilterFormView from './view/filter-view/filter-form-view.js';
import TripInfoView from './view/trip-info-view/trip-info-view.js';
import { render } from './render.js';
import TripPresenter from './presenter/trip-presenter.js';

const header = document.querySelector('.page-header');
const main = document.querySelector('.page-body__page-main');
const filterContainer = header.querySelector('.trip-controls__filters');
const sortingContainer = main.querySelector('.trip-events');
const tripMainContainer = header.querySelector('.trip-main');


const tripPresenter = new TripPresenter();

render(
  new TripInfoView('Amsterdam — Chamonix — Geneva', '18&nbsp;—&nbsp;20 Mar', 1230),
  tripMainContainer,
  'afterbegin'
);

render(new FilterFormView(), filterContainer);

tripPresenter.init(sortingContainer);

