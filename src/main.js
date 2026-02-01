import FilterFormView from './view/filter-view/filter-form-view.js';
import { render } from './render.js';
import TripPresenter from './presenter/trip-presenter.js';

const header = document.querySelector('.page-header');
const main = document.querySelector('.page-body__page-main');
const filterContainer = header.querySelector('.trip-controls__filters');
const sortingContainer = main.querySelector('.trip-events');

const tripPresenter = new TripPresenter();

render(new FilterFormView(), filterContainer);

tripPresenter.init(sortingContainer);

