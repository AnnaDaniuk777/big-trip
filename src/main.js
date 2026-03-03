import FilterFormView from './view/filter-view/filter-form-view.js';
import TripInfoView from './view/trip-info-view/trip-info-view.js';
import TripPresenter from './presenter/trip-presenter.js';
import TripInfoModel from './model/trip-info-model.js';
import PointsModel from './model/points-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import { render } from './render.js';

const header = document.querySelector('.page-header');
const main = document.querySelector('.page-body__page-main');
const filterContainer = header.querySelector('.trip-controls__filters');
const sortingContainer = main.querySelector('.trip-events');
const tripMainContainer = header.querySelector('.trip-main');

const pointsModel = new PointsModel();
const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();
const tripInfoModel = new TripInfoModel(pointsModel.getPoints());

const tripPresenter = new TripPresenter(
  sortingContainer,
  pointsModel,
  destinationsModel,
  offersModel
);

const title = tripInfoModel.getTripTitle();
const dates = tripInfoModel.getTripDates();
const cost = tripInfoModel.getTotalCost();

render(
  new TripInfoView(title, dates, cost),
  tripMainContainer,
  'afterbegin'
);

render(new FilterFormView(), filterContainer);

tripPresenter.init();
