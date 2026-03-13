import AbstractView from '../../framework/view/abstract-view.js';
import EventDateView from './event-date-view.js';
import EventTypeView from './event-type-view.js';
import EventTitleView from './event-title-view.js';
import EventScheduleView from './event-schedule-view.js';
import EventPriceView from './event-price-view.js';
import EventOfferListView from './event-offer-list-view.js';
import FavoriteButtonView from './favorite-button-view.js';
import RollupButtonView from './rollup-button-view.js';

const createTripEventTemplate = (point, destination, offers) => {
  const dateView = new EventDateView(point.dateFrom);
  const typeView = new EventTypeView(point.type);
  const titleView = new EventTitleView(point.type, destination.name);
  const scheduleView = new EventScheduleView(point.dateFrom, point.dateTo);
  const priceView = new EventPriceView(point.basePrice);
  const offersView = new EventOfferListView(offers);
  const favoriteButtonView = new FavoriteButtonView(point.isFavorite);
  const rollupButtonView = new RollupButtonView();

  return `
    <li class="trip-events__item">
      <div class="event">
        ${dateView.template}
        ${typeView.template}
        ${titleView.template}
        ${scheduleView.template}
        ${priceView.template}
        ${offersView.template}
        ${favoriteButtonView.template}
        ${rollupButtonView.template}
      </div>
    </li>
  `;
};

export default class EventCardView extends AbstractView {
  #point = null;
  #destination = null;
  #offers = null;

  constructor({point, destination, offers}) {
    super();
    this.#point = point;
    this.#destination = destination;
    this.#offers = offers;
  }

  get template() {
    return createTripEventTemplate(this.#point, this.#destination, this.#offers);
  }
}
